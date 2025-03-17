__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 495,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 13,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 13,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 11,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 30,
        "end": 31,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 32,
        "end": 37,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 34,
            "end": 35,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 57,
        "end": 62,
        "name": "Array",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 71,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 68,
            "end": 69,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 92,
            "name": "ara",
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
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 114,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 114,
            "name": "arb",
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
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 137,
            "name": "cra",
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
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
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
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 160,
            "name": "crb",
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
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
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
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 195,
            "name": "rra",
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
                  "name": "ReadonlyArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
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
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 230,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 230,
            "name": "rrb",
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
                  "name": "ReadonlyArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
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
      "kind": "var",
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
          "name": "rra",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 238,
          "end": 241,
          "name": "ara",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "rrb",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 249,
          "end": 252,
          "name": "arb",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "rra",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 310,
          "end": 313,
          "name": "arb",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "rrb",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 321,
          "end": 324,
          "name": "ara",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "rra",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 372,
          "end": 375,
          "name": "cra",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "rra",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 383,
          "end": 386,
          "name": "crb",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "rrb",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 440,
          "end": 443,
          "name": "crb",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "rrb",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 451,
          "end": 454,
          "name": "cra",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
