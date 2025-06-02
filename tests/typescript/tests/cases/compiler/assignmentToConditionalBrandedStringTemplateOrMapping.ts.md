__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 288,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 64,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 55,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 55,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 8,
                "end": 54,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 8,
                  "end": 11,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 9,
                      "end": 10,
                      "name": {
                        "type": "Identifier",
                        "start": 9,
                        "end": 10,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 14,
                  "end": 54,
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "start": 17,
                    "end": 54,
                    "checkType": {
                      "type": "TSTypeReference",
                      "start": 17,
                      "end": 18,
                      "typeName": {
                        "type": "Identifier",
                        "start": 17,
                        "end": 18,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "extendsType": {
                      "type": "TSTemplateLiteralType",
                      "start": 27,
                      "end": 46,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 27,
                          "end": 30,
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 44,
                          "end": 46,
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSIntersectionType",
                          "start": 30,
                          "end": 44,
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "start": 30,
                              "end": 33,
                              "literal": {
                                "type": "Literal",
                                "start": 30,
                                "end": 33,
                                "value": "a",
                                "raw": "'a'"
                              }
                            },
                            {
                              "type": "TSTypeLiteral",
                              "start": 36,
                              "end": 44,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 38,
                                  "end": 42,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 38,
                                    "end": 39,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 39,
                                    "end": 42,
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "start": 41,
                                      "end": 42,
                                      "literal": {
                                        "type": "Literal",
                                        "start": 41,
                                        "end": 42,
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "start": 49,
                      "end": 50,
                      "literal": {
                        "type": "Literal",
                        "start": 49,
                        "end": 50,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "start": 53,
                      "end": 54,
                      "literal": {
                        "type": "Literal",
                        "start": 53,
                        "end": 54,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "TSNonNullExpression",
            "start": 58,
            "end": 63,
            "expression": {
              "type": "Literal",
              "start": 58,
              "end": 62,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 129,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 120,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 120,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 73,
                "end": 119,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 73,
                  "end": 76,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 74,
                      "end": 75,
                      "name": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 75,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 79,
                  "end": 119,
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "start": 82,
                    "end": 119,
                    "checkType": {
                      "type": "TSTypeReference",
                      "start": 82,
                      "end": 83,
                      "typeName": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 83,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "extendsType": {
                      "type": "TSTemplateLiteralType",
                      "start": 92,
                      "end": 111,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 92,
                          "end": 95,
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 109,
                          "end": 111,
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSIntersectionType",
                          "start": 95,
                          "end": 109,
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "start": 95,
                              "end": 98,
                              "literal": {
                                "type": "Literal",
                                "start": 95,
                                "end": 98,
                                "value": "a",
                                "raw": "'a'"
                              }
                            },
                            {
                              "type": "TSTypeLiteral",
                              "start": 101,
                              "end": 109,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 103,
                                  "end": 107,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 103,
                                    "end": 104,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 104,
                                    "end": 107,
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "start": 106,
                                      "end": 107,
                                      "literal": {
                                        "type": "Literal",
                                        "start": 106,
                                        "end": 107,
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "start": 114,
                      "end": 115,
                      "literal": {
                        "type": "Literal",
                        "start": 114,
                        "end": 115,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "start": 118,
                      "end": 119,
                      "literal": {
                        "type": "Literal",
                        "start": 118,
                        "end": 119,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "TSNonNullExpression",
            "start": 123,
            "end": 128,
            "expression": {
              "type": "Literal",
              "start": 123,
              "end": 127,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 137,
      "expression": {
        "type": "AssignmentExpression",
        "start": 131,
        "end": 136,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 131,
          "end": 132,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 135,
          "end": 136,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 209,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 208,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 200,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 200,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 147,
                "end": 199,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 147,
                  "end": 150,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 148,
                      "end": 149,
                      "name": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 153,
                  "end": 199,
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "start": 156,
                    "end": 199,
                    "checkType": {
                      "type": "TSTypeReference",
                      "start": 156,
                      "end": 157,
                      "typeName": {
                        "type": "Identifier",
                        "start": 156,
                        "end": 157,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "start": 166,
                      "end": 191,
                      "typeName": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 175,
                        "decorators": [],
                        "name": "Uppercase",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 175,
                        "end": 191,
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "start": 176,
                            "end": 190,
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "start": 176,
                                "end": 179,
                                "literal": {
                                  "type": "Literal",
                                  "start": 176,
                                  "end": 179,
                                  "value": "a",
                                  "raw": "'a'"
                                }
                              },
                              {
                                "type": "TSTypeLiteral",
                                "start": 182,
                                "end": 190,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 184,
                                    "end": 188,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 184,
                                      "end": 185,
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 185,
                                      "end": 188,
                                      "typeAnnotation": {
                                        "type": "TSLiteralType",
                                        "start": 187,
                                        "end": 188,
                                        "literal": {
                                          "type": "Literal",
                                          "start": 187,
                                          "end": 188,
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "start": 194,
                      "end": 195,
                      "literal": {
                        "type": "Literal",
                        "start": 194,
                        "end": 195,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "start": 198,
                      "end": 199,
                      "literal": {
                        "type": "Literal",
                        "start": 198,
                        "end": 199,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "TSNonNullExpression",
            "start": 203,
            "end": 208,
            "expression": {
              "type": "Literal",
              "start": 203,
              "end": 207,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 210,
      "end": 280,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 279,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 271,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 271,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 218,
                "end": 270,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 218,
                  "end": 221,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 219,
                      "end": 220,
                      "name": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 220,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 224,
                  "end": 270,
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "start": 227,
                    "end": 270,
                    "checkType": {
                      "type": "TSTypeReference",
                      "start": 227,
                      "end": 228,
                      "typeName": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 228,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "start": 237,
                      "end": 262,
                      "typeName": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 246,
                        "decorators": [],
                        "name": "Uppercase",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 246,
                        "end": 262,
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "start": 247,
                            "end": 261,
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "start": 247,
                                "end": 250,
                                "literal": {
                                  "type": "Literal",
                                  "start": 247,
                                  "end": 250,
                                  "value": "a",
                                  "raw": "'a'"
                                }
                              },
                              {
                                "type": "TSTypeLiteral",
                                "start": 253,
                                "end": 261,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 255,
                                    "end": 259,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 255,
                                      "end": 256,
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 256,
                                      "end": 259,
                                      "typeAnnotation": {
                                        "type": "TSLiteralType",
                                        "start": 258,
                                        "end": 259,
                                        "literal": {
                                          "type": "Literal",
                                          "start": 258,
                                          "end": 259,
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "start": 265,
                      "end": 266,
                      "literal": {
                        "type": "Literal",
                        "start": 265,
                        "end": 266,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "start": 269,
                      "end": 270,
                      "literal": {
                        "type": "Literal",
                        "start": 269,
                        "end": 270,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "TSNonNullExpression",
            "start": 274,
            "end": 279,
            "expression": {
              "type": "Literal",
              "start": 274,
              "end": 278,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 282,
      "end": 288,
      "expression": {
        "type": "AssignmentExpression",
        "start": 282,
        "end": 287,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 282,
          "end": 283,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 286,
          "end": 287,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
