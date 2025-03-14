__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 609,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 86,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 68,
        "end": 86,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 74,
            "end": 84,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 67,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 153,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 153,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 151,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 132,
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
              "start": 132,
              "end": 151,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 151,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 101,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 110,
        "end": 114,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 155,
      "end": 183,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 170,
        "end": 183,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 176,
            "end": 181,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 180,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 179,
                "end": 180,
                "typeName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 180,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 166,
        "decorators": [],
        "name": "Base2",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 166,
        "end": 169,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 167,
            "end": 168,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
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
      "type": "ClassDeclaration",
      "start": 185,
      "end": 388,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 220,
        "end": 388,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 226,
            "end": 386,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 237,
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
              "start": 237,
              "end": 386,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 240,
                "end": 386,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 305,
                    "end": 328,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 309,
                        "end": 327,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 309,
                          "end": 311,
                          "decorators": [],
                          "name": "r2",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 314,
                          "end": 327,
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "start": 320,
                            "end": 327,
                            "arguments": [],
                            "callee": {
                              "type": "Super",
                              "start": 320,
                              "end": 325
                            },
                            "optional": false
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 199,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 211,
        "end": 216,
        "decorators": [],
        "name": "Base2",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 216,
        "end": 219,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 217,
            "end": 218,
            "typeName": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 199,
        "end": 202,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 200,
            "end": 201,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
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
      "type": "ClassDeclaration",
      "start": 390,
      "end": 512,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 425,
        "end": 512,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 431,
            "end": 510,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 431,
              "end": 442,
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
              "start": 442,
              "end": 510,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 445,
                "end": 510,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 464,
                    "end": 495,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 468,
                        "end": 495,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 468,
                          "end": 469,
                          "decorators": [],
                          "name": "r",
                          "optional": false
                        },
                        "init": {
                          "type": "FunctionExpression",
                          "start": 472,
                          "end": 495,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 484,
                            "end": 495,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 486,
                                "end": 493,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 486,
                                  "end": 493,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Super",
                                    "start": 486,
                                    "end": 491
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
                          "params": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 404,
        "decorators": [],
        "name": "Derived3",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 416,
        "end": 421,
        "decorators": [],
        "name": "Base2",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 421,
        "end": 424,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 422,
            "end": 423,
            "typeName": {
              "type": "Identifier",
              "start": 422,
              "end": 423,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 404,
        "end": 407,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 405,
            "end": 406,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 405,
              "end": 406,
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
      "type": "ClassDeclaration",
      "start": 514,
      "end": 609,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 549,
        "end": 609,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 555,
            "end": 607,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 555,
              "end": 566,
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
              "start": 566,
              "end": 607,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 569,
                "end": 607,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 579,
                    "end": 595,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 583,
                        "end": 594,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 583,
                          "end": 584,
                          "decorators": [],
                          "name": "r",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 587,
                          "end": 594,
                          "arguments": [],
                          "callee": {
                            "type": "Super",
                            "start": 587,
                            "end": 592
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 520,
        "end": 528,
        "decorators": [],
        "name": "Derived4",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 540,
        "end": 545,
        "decorators": [],
        "name": "Base2",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 545,
        "end": 548,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 546,
            "end": 547,
            "typeName": {
              "type": "Identifier",
              "start": 546,
              "end": 547,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 528,
        "end": 531,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 529,
            "end": 530,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 529,
              "end": 530,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
