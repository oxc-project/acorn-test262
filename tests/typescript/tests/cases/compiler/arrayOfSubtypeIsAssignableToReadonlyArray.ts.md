__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 494,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 13,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 13,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 11,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 37,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 30,
        "end": 31,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 32,
        "end": 37,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 34,
            "end": 35,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 71,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 45,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 47,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
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
      "superClass": {
        "type": "Identifier",
        "start": 57,
        "end": 62,
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 62,
        "end": 65,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 63,
            "end": 64,
            "typeName": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 71,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 68,
            "end": 69,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 93,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 92,
            "decorators": [],
            "name": "ara",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 92,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 89,
                "end": 92,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 89,
                  "end": 90,
                  "typeName": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 90,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
      "start": 94,
      "end": 115,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 114,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 114,
            "decorators": [],
            "name": "arb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 114,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 111,
                "end": 114,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 111,
                  "end": 112,
                  "typeName": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 112,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
      "start": 116,
      "end": 138,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 137,
            "decorators": [],
            "name": "cra",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 137,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 133,
                "end": 137,
                "typeName": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 134,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 134,
                  "end": 137,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 135,
                      "end": 136,
                      "typeName": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 136,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
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
      "start": 139,
      "end": 161,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 160,
            "decorators": [],
            "name": "crb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 156,
                "end": 160,
                "typeName": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 157,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 157,
                  "end": 160,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 158,
                      "end": 159,
                      "typeName": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 159,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
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
      "start": 162,
      "end": 196,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 195,
            "decorators": [],
            "name": "rra",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 195,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 179,
                "end": 195,
                "typeName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 192,
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 192,
                  "end": 195,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 193,
                      "end": 194,
                      "typeName": {
                        "type": "Identifier",
                        "start": 193,
                        "end": 194,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
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
      "start": 197,
      "end": 231,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 230,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 230,
            "decorators": [],
            "name": "rrb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 230,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 214,
                "end": 230,
                "typeName": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 227,
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 227,
                  "end": 230,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 228,
                      "end": 229,
                      "typeName": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 229,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
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
      "type": "ExpressionStatement",
      "start": 232,
      "end": 242,
      "expression": {
        "type": "AssignmentExpression",
        "start": 232,
        "end": 241,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 232,
          "end": 235,
          "decorators": [],
          "name": "rra",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 238,
          "end": 241,
          "decorators": [],
          "name": "ara",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 243,
      "end": 253,
      "expression": {
        "type": "AssignmentExpression",
        "start": 243,
        "end": 252,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 243,
          "end": 246,
          "decorators": [],
          "name": "rrb",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 249,
          "end": 252,
          "decorators": [],
          "name": "arb",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 304,
      "end": 314,
      "expression": {
        "type": "AssignmentExpression",
        "start": 304,
        "end": 313,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 304,
          "end": 307,
          "decorators": [],
          "name": "rra",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 310,
          "end": 313,
          "decorators": [],
          "name": "arb",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 315,
      "end": 325,
      "expression": {
        "type": "AssignmentExpression",
        "start": 315,
        "end": 324,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 315,
          "end": 318,
          "decorators": [],
          "name": "rrb",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 321,
          "end": 324,
          "decorators": [],
          "name": "ara",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 366,
      "end": 376,
      "expression": {
        "type": "AssignmentExpression",
        "start": 366,
        "end": 375,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 366,
          "end": 369,
          "decorators": [],
          "name": "rra",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 372,
          "end": 375,
          "decorators": [],
          "name": "cra",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 377,
      "end": 387,
      "expression": {
        "type": "AssignmentExpression",
        "start": 377,
        "end": 386,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 377,
          "end": 380,
          "decorators": [],
          "name": "rra",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 383,
          "end": 386,
          "decorators": [],
          "name": "crb",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 434,
      "end": 444,
      "expression": {
        "type": "AssignmentExpression",
        "start": 434,
        "end": 443,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 434,
          "end": 437,
          "decorators": [],
          "name": "rrb",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 440,
          "end": 443,
          "decorators": [],
          "name": "crb",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 445,
      "end": 455,
      "expression": {
        "type": "AssignmentExpression",
        "start": 445,
        "end": 454,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 445,
          "end": 448,
          "decorators": [],
          "name": "rrb",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 451,
          "end": 454,
          "decorators": [],
          "name": "cra",
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
