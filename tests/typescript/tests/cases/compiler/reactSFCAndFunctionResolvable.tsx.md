__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 584,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 76,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 52,
          "end": 62,
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 62,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 75,
        "value": "react",
        "raw": "'react'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 137,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 136,
            "decorators": [],
            "name": "Radio",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 136,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 99,
                "end": 136,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 100,
                    "end": 109,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 105,
                      "end": 109,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 107,
                        "end": 109,
                        "members": []
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 111,
                  "end": 136,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 114,
                    "end": 136,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 114,
                      "end": 132,
                      "left": {
                        "type": "Identifier",
                        "start": 114,
                        "end": 119,
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 132,
                        "decorators": [],
                        "name": "ReactElement",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 132,
                      "end": 136,
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 133,
                          "end": 135,
                          "members": []
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 193,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 192,
            "decorators": [],
            "name": "OtherRadio",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 192,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 164,
                "end": 192,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 167,
                  "end": 192,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 170,
                    "end": 192,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 170,
                      "end": 188,
                      "left": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 175,
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 176,
                        "end": 188,
                        "decorators": [],
                        "name": "ReactElement",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 188,
                      "end": 192,
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 189,
                          "end": 191,
                          "members": []
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 228,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 227,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 227,
            "decorators": [],
            "name": "Checkbox",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 216,
              "end": 227,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 218,
                "end": 227,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 218,
                  "end": 227,
                  "left": {
                    "type": "Identifier",
                    "start": 218,
                    "end": 223,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 227,
                    "decorators": [],
                    "name": "SFC",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 264,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 244,
          "end": 263,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 263,
            "decorators": [],
            "name": "condition1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 263,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 256,
                "end": 263
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 299,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 298,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 298,
            "decorators": [],
            "name": "condition2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 298,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 291,
                "end": 298
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 334,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 333,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 333,
            "decorators": [],
            "name": "condition3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 324,
              "end": 333,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 326,
                "end": 333
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 336,
      "end": 584,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 583,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 368,
            "decorators": [],
            "name": "RandomComponent",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 357,
              "end": 368,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 359,
                "end": 368,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 359,
                  "end": 368,
                  "left": {
                    "type": "Identifier",
                    "start": 359,
                    "end": 364,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 368,
                    "decorators": [],
                    "name": "SFC",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 371,
            "end": 583,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 377,
              "end": 583,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 381,
                  "end": 445,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 387,
                      "end": 444,
                      "id": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 396,
                        "decorators": [],
                        "name": "Component",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 403,
                        "end": 444,
                        "test": {
                          "type": "Identifier",
                          "start": 403,
                          "end": 413,
                          "decorators": [],
                          "name": "condition1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 422,
                          "end": 427,
                          "decorators": [],
                          "name": "Radio",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "alternate": {
                          "type": "Identifier",
                          "start": 436,
                          "end": 444,
                          "decorators": [],
                          "name": "Checkbox",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 449,
                  "end": 523,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 455,
                      "end": 522,
                      "id": {
                        "type": "Identifier",
                        "start": 455,
                        "end": 469,
                        "decorators": [],
                        "name": "OtherComponent",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 476,
                        "end": 522,
                        "test": {
                          "type": "Identifier",
                          "start": 476,
                          "end": 486,
                          "decorators": [],
                          "name": "condition2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 495,
                          "end": 505,
                          "decorators": [],
                          "name": "OtherRadio",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "alternate": {
                          "type": "Identifier",
                          "start": 514,
                          "end": 522,
                          "decorators": [],
                          "name": "Checkbox",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 526,
                  "end": 581,
                  "argument": {
                    "type": "ConditionalExpression",
                    "start": 533,
                    "end": 580,
                    "test": {
                      "type": "Identifier",
                      "start": 533,
                      "end": 543,
                      "decorators": [],
                      "name": "condition1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "consequent": {
                      "type": "JSXElement",
                      "start": 546,
                      "end": 559,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 546,
                        "end": 559,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 547,
                          "end": 556,
                          "name": "Component"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": true
                      },
                      "children": [],
                      "closingElement": null
                    },
                    "alternate": {
                      "type": "JSXElement",
                      "start": 562,
                      "end": 580,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 562,
                        "end": 580,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 563,
                          "end": 577,
                          "name": "OtherComponent"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": true
                      },
                      "children": [],
                      "closingElement": null
                    }
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
