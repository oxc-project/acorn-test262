__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 185,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 30,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 30,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 27,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 24,
                "end": 27
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 41,
            "end": 47,
            "expression": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 42,
              "end": 45
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 58,
            "end": 68,
            "computed": false,
            "object": {
              "type": "TSTypeAssertion",
              "start": 59,
              "end": 65,
              "expression": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 60,
                "end": 63
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 90,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 78,
            "end": 90,
            "computed": false,
            "object": {
              "type": "TSTypeAssertion",
              "start": 79,
              "end": 87,
              "expression": {
                "type": "MemberExpression",
                "start": 84,
                "end": 87,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 85,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 80,
                "end": 83
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 114,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 100,
            "end": 114,
            "computed": false,
            "object": {
              "type": "TSTypeAssertion",
              "start": 101,
              "end": 111,
              "expression": {
                "type": "CallExpression",
                "start": 106,
                "end": 111,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 106,
                  "end": 109,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 102,
                "end": 105
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 121,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 125,
            "end": 135,
            "expression": {
              "type": "NewExpression",
              "start": 130,
              "end": 135,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 126,
              "end": 129
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 147,
            "end": 159,
            "expression": {
              "type": "NewExpression",
              "start": 152,
              "end": 159,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 156,
                "end": 159,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 157,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 148,
              "end": 151
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 184,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 170,
            "end": 184,
            "computed": false,
            "object": {
              "type": "TSTypeAssertion",
              "start": 171,
              "end": 181,
              "expression": {
                "type": "NewExpression",
                "start": 176,
                "end": 181,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 181,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 172,
                "end": 175
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
