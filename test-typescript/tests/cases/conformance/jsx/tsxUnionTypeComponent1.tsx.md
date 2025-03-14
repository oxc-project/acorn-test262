__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    538
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
          59,
          139
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "AnyComponent",
              "optional": false,
              "range": [
                65,
                77
              ],
              "loc": {
                "end": {
                  "column": 16,
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
                  "column": 75,
                  "line": 4
                },
                "start": {
                  "column": 16,
                  "line": 4
                }
              },
              "range": [
                77,
                136
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        103,
                        108
                      ],
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            104,
                            107
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 4
                            },
                            "start": {
                              "column": 43,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 4
                        },
                        "start": {
                          "column": 42,
                          "line": 4
                        }
                      }
                    },
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "range": [
                          79,
                          84
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 4
                          },
                          "start": {
                            "column": 18,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StatelessComponent",
                        "optional": false,
                        "range": [
                          85,
                          103
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 4
                          },
                          "start": {
                            "column": 24,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        79,
                        103
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 4
                        },
                        "start": {
                          "column": 18,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      79,
                      108
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 4
                      },
                      "start": {
                        "column": 18,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        131,
                        136
                      ],
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            132,
                            135
                          ],
                          "loc": {
                            "end": {
                              "column": 74,
                              "line": 4
                            },
                            "start": {
                              "column": 71,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 4
                        },
                        "start": {
                          "column": 70,
                          "line": 4
                        }
                      }
                    },
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "range": [
                          111,
                          116
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 4
                          },
                          "start": {
                            "column": 50,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ComponentClass",
                        "optional": false,
                        "range": [
                          117,
                          131
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 4
                          },
                          "start": {
                            "column": 56,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        111,
                        131
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 4
                        },
                        "start": {
                          "column": 50,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      111,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 4
                      },
                      "start": {
                        "column": 50,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  79,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 4
                  },
                  "start": {
                    "column": 18,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              65,
              137
            ],
            "loc": {
              "end": {
                "column": 76,
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
            "column": 25,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentProps",
        "optional": false,
        "range": [
          44,
          58
        ],
        "loc": {
          "end": {
            "column": 24,
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
        139
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
          203,
          307
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
                209,
                215
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
                215,
                305
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AnyComponent",
                                "optional": false,
                                "range": [
                                  236,
                                  248
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 9
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AnyComponent",
                                "optional": false,
                                "range": [
                                  236,
                                  248
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                236,
                                248
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 9
                                },
                                "start": {
                                  "column": 16,
                                  "line": 9
                                }
                              }
                            }
                          ],
                          "range": [
                            234,
                            250
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 9
                            },
                            "start": {
                              "column": 14,
                              "line": 9
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              253,
                              257
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 9
                              },
                              "start": {
                                "column": 33,
                                "line": 9
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
                              258,
                              263
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 9
                              },
                              "start": {
                                "column": 38,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            253,
                            263
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 9
                            },
                            "start": {
                              "column": 33,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          234,
                          263
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 9
                          },
                          "start": {
                            "column": 14,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      228,
                      264
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "children": [],
                      "closingElement": null,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "range": [
                          281,
                          297
                        ],
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "AnyComponent",
                          "range": [
                            282,
                            294
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 10
                            },
                            "start": {
                              "column": 17,
                              "line": 10
                            }
                          }
                        },
                        "selfClosing": true,
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 10
                          },
                          "start": {
                            "column": 16,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        281,
                        297
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 10
                        },
                        "start": {
                          "column": 16,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      273,
                      299
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
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
                  218,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
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
                  "line": 11
                },
                "start": {
                  "column": 10,
                  "line": 8
                }
              }
            },
            "range": [
              209,
              305
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
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
            "line": 12
          },
          "start": {
            "column": 62,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComponent",
        "optional": false,
        "range": [
          147,
          158
        ],
        "loc": {
          "end": {
            "column": 17,
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
            167,
            172
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 7
            },
            "start": {
              "column": 26,
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
            173,
            182
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 7
            },
            "start": {
              "column": 32,
              "line": 7
            }
          }
        },
        "range": [
          167,
          182
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 7
          },
          "start": {
            "column": 26,
            "line": 7
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          182,
          202
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentProps",
              "optional": false,
              "range": [
                183,
                197
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 7
                },
                "start": {
                  "column": 42,
                  "line": 7
                }
              }
            },
            "range": [
              183,
              197
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 7
              },
              "start": {
                "column": 42,
                "line": 7
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              199,
              201
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 7
              },
              "start": {
                "column": 58,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 7
          },
          "start": {
            "column": 41,
            "line": 7
          }
        }
      },
      "range": [
        141,
        307
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 7
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
            341,
            398
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "AnyComponent",
                "range": [
                  354,
                  366
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 15
                  },
                  "start": {
                    "column": 13,
                    "line": 15
                  }
                }
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "JSXElement",
                    "children": [
                      {
                        "type": "JSXText",
                        "range": [
                          382,
                          386
                        ],
                        "raw": "test",
                        "value": "test",
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 15
                          },
                          "start": {
                            "column": 41,
                            "line": 15
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
                          388,
                          394
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 15
                          },
                          "start": {
                            "column": 47,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        386,
                        395
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 15
                        },
                        "start": {
                          "column": 45,
                          "line": 15
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
                          375,
                          381
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 15
                          },
                          "start": {
                            "column": 34,
                            "line": 15
                          }
                        }
                      },
                      "selfClosing": false,
                      "range": [
                        374,
                        382
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 15
                        },
                        "start": {
                          "column": 33,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      374,
                      395
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 15
                      },
                      "start": {
                        "column": 33,
                        "line": 15
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    368,
                    395
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 15
                    },
                    "start": {
                      "column": 27,
                      "line": 15
                    }
                  }
                },
                "range": [
                  367,
                  396
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 15
                  },
                  "start": {
                    "column": 26,
                    "line": 15
                  }
                }
              },
              "range": [
                354,
                396
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 15
                },
                "start": {
                  "column": 13,
                  "line": 15
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComponent",
            "range": [
              342,
              353
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 15
              },
              "start": {
                "column": 1,
                "line": 15
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 57,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "range": [
          341,
          398
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        341,
        398
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          483,
          486
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 55,
            "line": 18
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyButtonComponent",
        "optional": false,
        "range": [
          434,
          451
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 18
          },
          "start": {
            "column": 6,
            "line": 18
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
            460,
            465
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 18
            },
            "start": {
              "column": 32,
              "line": 18
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
            466,
            475
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 18
            },
            "start": {
              "column": 38,
              "line": 18
            }
          }
        },
        "range": [
          460,
          475
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 18
          },
          "start": {
            "column": 32,
            "line": 18
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          475,
          482
        ],
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              476,
              478
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 18
              },
              "start": {
                "column": 48,
                "line": 18
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              479,
              481
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 18
              },
              "start": {
                "column": 51,
                "line": 18
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 18
          },
          "start": {
            "column": 47,
            "line": 18
          }
        }
      },
      "range": [
        428,
        486
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 18
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
            488,
            536
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "AnyComponent",
                "range": [
                  501,
                  513
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 21
                  },
                  "start": {
                    "column": 13,
                    "line": 21
                  }
                }
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyButtonComponent",
                  "optional": false,
                  "range": [
                    515,
                    532
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 21
                    },
                    "start": {
                      "column": 27,
                      "line": 21
                    }
                  }
                },
                "range": [
                  514,
                  533
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 21
                  },
                  "start": {
                    "column": 26,
                    "line": 21
                  }
                }
              },
              "range": [
                501,
                533
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 21
                },
                "start": {
                  "column": 13,
                  "line": 21
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComponent",
            "range": [
              489,
              500
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 21
              },
              "start": {
                "column": 1,
                "line": 21
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 48,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "range": [
          488,
          536
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        488,
        536
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
