__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 585,
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
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 136,
            "name": "Radio",
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
                    "name": "props",
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
                    },
                    "decorators": [],
                    "optional": false
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
                        "name": "React",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 132,
                        "name": "ReactElement",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 192,
            "name": "OtherRadio",
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
                        "name": "React",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 176,
                        "end": 188,
                        "name": "ReactElement",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 228,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 227,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 227,
            "name": "Checkbox",
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
                    "name": "React",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 227,
                    "name": "SFC",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 244,
          "end": 263,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 263,
            "name": "condition1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 263,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 256,
                "end": 263
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 298,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 298,
            "name": "condition2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 298,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 291,
                "end": 298
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 334,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 333,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 333,
            "name": "condition3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 324,
              "end": 333,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 326,
                "end": 333
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 336,
      "end": 584,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 583,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 368,
            "name": "RandomComponent",
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
                    "name": "React",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 368,
                    "name": "SFC",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 371,
            "end": 583,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 377,
              "end": 583,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 381,
                  "end": 445,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 387,
                      "end": 444,
                      "id": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 396,
                        "name": "Component",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 403,
                        "end": 444,
                        "test": {
                          "type": "Identifier",
                          "start": 403,
                          "end": 413,
                          "name": "condition1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 422,
                          "end": 427,
                          "name": "Radio",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "alternate": {
                          "type": "Identifier",
                          "start": 436,
                          "end": 444,
                          "name": "Checkbox",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 449,
                  "end": 523,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 455,
                      "end": 522,
                      "id": {
                        "type": "Identifier",
                        "start": 455,
                        "end": 469,
                        "name": "OtherComponent",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 476,
                        "end": 522,
                        "test": {
                          "type": "Identifier",
                          "start": 476,
                          "end": 486,
                          "name": "condition2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 495,
                          "end": 505,
                          "name": "OtherRadio",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "alternate": {
                          "type": "Identifier",
                          "start": 514,
                          "end": 522,
                          "name": "Checkbox",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
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
                      "name": "condition1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "consequent": {
                      "type": "JSXElement",
                      "start": 546,
                      "end": 559,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 546,
                        "end": 559,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 547,
                          "end": 556,
                          "name": "Component"
                        },
                        "selfClosing": true,
                        "typeArguments": null
                      },
                      "closingElement": null,
                      "children": []
                    },
                    "alternate": {
                      "type": "JSXElement",
                      "start": 562,
                      "end": 580,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 562,
                        "end": 580,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 563,
                          "end": 577,
                          "name": "OtherComponent"
                        },
                        "selfClosing": true,
                        "typeArguments": null
                      },
                      "closingElement": null,
                      "children": []
                    }
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
