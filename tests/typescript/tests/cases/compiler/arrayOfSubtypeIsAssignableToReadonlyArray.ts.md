__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
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
            "accessibility": null,
            "start": 10,
            "end": 11
          }
        ],
        "start": 8,
        "end": 13
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 21
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 31
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
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
            "accessibility": null,
            "start": 34,
            "end": 35
          }
        ],
        "start": 32,
        "end": 37
      },
      "abstract": false,
      "declare": false,
      "start": 14,
      "end": 37
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 45
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 46,
            "end": 47
          }
        ],
        "start": 45,
        "end": 48
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 62
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 64
            },
            "typeArguments": null,
            "start": 63,
            "end": 64
          }
        ],
        "start": 62,
        "end": 65
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
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
            "accessibility": null,
            "start": 68,
            "end": 69
          }
        ],
        "start": 66,
        "end": 71
      },
      "abstract": false,
      "declare": false,
      "start": 38,
      "end": 71
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ara",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 89,
                    "end": 90
                  },
                  "typeArguments": null,
                  "start": 89,
                  "end": 90
                },
                "start": 89,
                "end": 92
              },
              "start": 87,
              "end": 92
            },
            "start": 84,
            "end": 92
          },
          "init": null,
          "definite": false,
          "start": 84,
          "end": 92
        }
      ],
      "declare": true,
      "start": 72,
      "end": 93
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 111,
                    "end": 112
                  },
                  "typeArguments": null,
                  "start": 111,
                  "end": 112
                },
                "start": 111,
                "end": 114
              },
              "start": 109,
              "end": 114
            },
            "start": 106,
            "end": 114
          },
          "init": null,
          "definite": false,
          "start": 106,
          "end": 114
        }
      ],
      "declare": true,
      "start": 94,
      "end": 115
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cra",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 134
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 135,
                        "end": 136
                      },
                      "typeArguments": null,
                      "start": 135,
                      "end": 136
                    }
                  ],
                  "start": 134,
                  "end": 137
                },
                "start": 133,
                "end": 137
              },
              "start": 131,
              "end": 137
            },
            "start": 128,
            "end": 137
          },
          "init": null,
          "definite": false,
          "start": 128,
          "end": 137
        }
      ],
      "declare": true,
      "start": 116,
      "end": 138
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "crb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 157
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 159
                      },
                      "typeArguments": null,
                      "start": 158,
                      "end": 159
                    }
                  ],
                  "start": 157,
                  "end": 160
                },
                "start": 156,
                "end": 160
              },
              "start": 154,
              "end": 160
            },
            "start": 151,
            "end": 160
          },
          "init": null,
          "definite": false,
          "start": 151,
          "end": 160
        }
      ],
      "declare": true,
      "start": 139,
      "end": 161
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "rra",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 192
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 193,
                        "end": 194
                      },
                      "typeArguments": null,
                      "start": 193,
                      "end": 194
                    }
                  ],
                  "start": 192,
                  "end": 195
                },
                "start": 179,
                "end": 195
              },
              "start": 177,
              "end": 195
            },
            "start": 174,
            "end": 195
          },
          "init": null,
          "definite": false,
          "start": 174,
          "end": 195
        }
      ],
      "declare": true,
      "start": 162,
      "end": 196
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "rrb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 227
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 228,
                        "end": 229
                      },
                      "typeArguments": null,
                      "start": 228,
                      "end": 229
                    }
                  ],
                  "start": 227,
                  "end": 230
                },
                "start": 214,
                "end": 230
              },
              "start": 212,
              "end": 230
            },
            "start": 209,
            "end": 230
          },
          "init": null,
          "definite": false,
          "start": 209,
          "end": 230
        }
      ],
      "declare": true,
      "start": 197,
      "end": 231
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "rra",
          "optional": false,
          "typeAnnotation": null,
          "start": 232,
          "end": 235
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ara",
          "optional": false,
          "typeAnnotation": null,
          "start": 238,
          "end": 241
        },
        "start": 232,
        "end": 241
      },
      "directive": null,
      "start": 232,
      "end": 242
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "rrb",
          "optional": false,
          "typeAnnotation": null,
          "start": 243,
          "end": 246
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arb",
          "optional": false,
          "typeAnnotation": null,
          "start": 249,
          "end": 252
        },
        "start": 243,
        "end": 252
      },
      "directive": null,
      "start": 243,
      "end": 253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "rra",
          "optional": false,
          "typeAnnotation": null,
          "start": 304,
          "end": 307
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arb",
          "optional": false,
          "typeAnnotation": null,
          "start": 310,
          "end": 313
        },
        "start": 304,
        "end": 313
      },
      "directive": null,
      "start": 304,
      "end": 314
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "rrb",
          "optional": false,
          "typeAnnotation": null,
          "start": 315,
          "end": 318
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ara",
          "optional": false,
          "typeAnnotation": null,
          "start": 321,
          "end": 324
        },
        "start": 315,
        "end": 324
      },
      "directive": null,
      "start": 315,
      "end": 325
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "rra",
          "optional": false,
          "typeAnnotation": null,
          "start": 366,
          "end": 369
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "cra",
          "optional": false,
          "typeAnnotation": null,
          "start": 372,
          "end": 375
        },
        "start": 366,
        "end": 375
      },
      "directive": null,
      "start": 366,
      "end": 376
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "rra",
          "optional": false,
          "typeAnnotation": null,
          "start": 377,
          "end": 380
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "crb",
          "optional": false,
          "typeAnnotation": null,
          "start": 383,
          "end": 386
        },
        "start": 377,
        "end": 386
      },
      "directive": null,
      "start": 377,
      "end": 387
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "rrb",
          "optional": false,
          "typeAnnotation": null,
          "start": 434,
          "end": 437
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "crb",
          "optional": false,
          "typeAnnotation": null,
          "start": 440,
          "end": 443
        },
        "start": 434,
        "end": 443
      },
      "directive": null,
      "start": 434,
      "end": 444
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "rrb",
          "optional": false,
          "typeAnnotation": null,
          "start": 445,
          "end": 448
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "cra",
          "optional": false,
          "typeAnnotation": null,
          "start": 451,
          "end": 454
        },
        "start": 445,
        "end": 454
      },
      "directive": null,
      "start": 445,
      "end": 455
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 494
}
```
