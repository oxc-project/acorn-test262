__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 665,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 157,
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 157,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 28,
            "end": 62,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 43,
              "decorators": [],
              "name": "changeListeners",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 62,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 45,
                "end": 62,
                "types": [
                  {
                    "type": "TSArrayType",
                    "start": 45,
                    "end": 55,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 45,
                      "end": 53,
                      "typeName": {
                        "type": "Identifier",
                        "start": 45,
                        "end": 53,
                        "decorators": [],
                        "name": "Function",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 58,
                    "end": 62
                  }
                ]
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 67,
            "end": 155,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 74,
              "decorators": [],
              "name": "observe",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 75,
                "end": 121,
                "decorators": [],
                "name": "handler",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 82,
                  "end": 121,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 84,
                    "end": 121,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 85,
                        "end": 96,
                        "decorators": [],
                        "name": "change",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 91,
                          "end": 96,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 93,
                            "end": 96
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 98,
                        "end": 112,
                        "decorators": [],
                        "name": "oldValue",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 107,
                          "end": 112,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 109,
                            "end": 112
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 114,
                      "end": 121,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 117,
                        "end": 121
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 123,
                "end": 148,
                "decorators": [],
                "name": "fireImmediately",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 139,
                  "end": 148,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 141,
                    "end": 148
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 155,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 151,
                "end": 155
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "decorators": [],
        "name": "IListenable",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 159,
      "end": 226,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 223,
        "end": 226,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 183,
        "decorators": [],
        "name": "notifyListeners",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 187,
          "end": 210,
          "decorators": [],
          "name": "listenable",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 197,
            "end": 210,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 199,
              "end": 210,
              "typeName": {
                "type": "Identifier",
                "start": 199,
                "end": 210,
                "decorators": [],
                "name": "IListenable",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 212,
          "end": 221,
          "decorators": [],
          "name": "change",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 218,
            "end": 221,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 220,
              "end": 221,
              "typeName": {
                "type": "Identifier",
                "start": 220,
                "end": 221,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 183,
        "end": 186,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 184,
            "end": 185,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 228,
      "end": 665,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 235,
        "end": 665,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 260,
          "end": 665,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 266,
              "end": 528,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 266,
                "end": 277,
                "decorators": [],
                "name": "constructor",
                "optional": false
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 277,
                "end": 528,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 309,
                  "end": 528,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 319,
                      "end": 345,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 325,
                          "end": 344,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 325,
                            "end": 336,
                            "decorators": [],
                            "name": "newValue",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 333,
                              "end": 336,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 335,
                                "end": 336,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 335,
                                  "end": 336,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 339,
                            "end": 344,
                            "decorators": [],
                            "name": "value",
                            "optional": false
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const"
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 354,
                      "end": 381,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 360,
                          "end": 380,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 360,
                            "end": 373,
                            "decorators": [],
                            "name": "oldValue",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 368,
                              "end": 373,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 370,
                                "end": 373
                              }
                            }
                          },
                          "init": {
                            "type": "Literal",
                            "start": 376,
                            "end": 380,
                            "raw": "null",
                            "value": null
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const"
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 390,
                      "end": 522,
                      "expression": {
                        "type": "CallExpression",
                        "start": 390,
                        "end": 521,
                        "arguments": [
                          {
                            "type": "ThisExpression",
                            "start": 406,
                            "end": 410
                          },
                          {
                            "type": "ObjectExpression",
                            "start": 412,
                            "end": 520,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 426,
                                "end": 440,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 426,
                                  "end": 430,
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "start": 432,
                                  "end": 440,
                                  "raw": "\"update\"",
                                  "value": "update"
                                }
                              },
                              {
                                "type": "Property",
                                "start": 454,
                                "end": 466,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 454,
                                  "end": 460,
                                  "decorators": [],
                                  "name": "object",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "ThisExpression",
                                  "start": 462,
                                  "end": 466
                                }
                              },
                              {
                                "type": "Property",
                                "start": 480,
                                "end": 488,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 480,
                                  "end": 488,
                                  "decorators": [],
                                  "name": "newValue",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": true,
                                "value": {
                                  "type": "Identifier",
                                  "start": 480,
                                  "end": 488,
                                  "decorators": [],
                                  "name": "newValue",
                                  "optional": false
                                }
                              },
                              {
                                "type": "Property",
                                "start": 502,
                                "end": 510,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 502,
                                  "end": 510,
                                  "decorators": [],
                                  "name": "oldValue",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": true,
                                "value": {
                                  "type": "Identifier",
                                  "start": 502,
                                  "end": 510,
                                  "decorators": [],
                                  "name": "oldValue",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 390,
                          "end": 405,
                          "decorators": [],
                          "name": "notifyListeners",
                          "optional": false
                        },
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 287,
                    "end": 302,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 294,
                      "end": 302,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 299,
                        "end": 302,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 301,
                          "end": 302,
                          "typeName": {
                            "type": "Identifier",
                            "start": 301,
                            "end": 302,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 533,
              "end": 573,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 533,
                "end": 548,
                "decorators": [],
                "name": "changeListeners",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 548,
                "end": 567,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 550,
                  "end": 567,
                  "types": [
                    {
                      "type": "TSArrayType",
                      "start": 550,
                      "end": 560,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 550,
                        "end": 558,
                        "typeName": {
                          "type": "Identifier",
                          "start": 550,
                          "end": 558,
                          "decorators": [],
                          "name": "Function",
                          "optional": false
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 563,
                      "end": 567
                    }
                  ]
                }
              },
              "value": {
                "type": "ArrayExpression",
                "start": 570,
                "end": 572,
                "elements": []
              }
            },
            {
              "type": "MethodDefinition",
              "start": 578,
              "end": 663,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 578,
                "end": 585,
                "decorators": [],
                "name": "observe",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 585,
                "end": 663,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 661,
                  "end": 663,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 586,
                    "end": 632,
                    "decorators": [],
                    "name": "handler",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 593,
                      "end": 632,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 595,
                        "end": 632,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 596,
                            "end": 607,
                            "decorators": [],
                            "name": "change",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 602,
                              "end": 607,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 604,
                                "end": 607
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 609,
                            "end": 623,
                            "decorators": [],
                            "name": "oldValue",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 618,
                              "end": 623,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 620,
                                "end": 623
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 625,
                          "end": 632,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 628,
                            "end": 632
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 634,
                    "end": 659,
                    "decorators": [],
                    "name": "fireImmediately",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 650,
                      "end": 659,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 652,
                        "end": 659
                      }
                    }
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 241,
          "end": 256,
          "decorators": [],
          "name": "ObservableValue",
          "optional": false
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 256,
          "end": 259,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 257,
              "end": 258,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
