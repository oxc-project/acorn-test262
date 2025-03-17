__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 186,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 31,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 31,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 29,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
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
              "start": 23,
              "end": 28,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 25,
                "end": 28
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
        "start": 7,
        "end": 8,
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
      "start": 33,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 42,
            "end": 48,
            "expression": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 43,
              "end": 46
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 59,
            "end": 69,
            "computed": false,
            "object": {
              "type": "TSTypeAssertion",
              "start": 60,
              "end": 66,
              "expression": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 61,
                "end": 64
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
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
      "start": 71,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 91,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 79,
            "end": 91,
            "computed": false,
            "object": {
              "type": "TSTypeAssertion",
              "start": 80,
              "end": 88,
              "expression": {
                "type": "MemberExpression",
                "start": 85,
                "end": 88,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 81,
                "end": 84
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
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
      "start": 93,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 101,
            "end": 115,
            "computed": false,
            "object": {
              "type": "TSTypeAssertion",
              "start": 102,
              "end": 112,
              "expression": {
                "type": "CallExpression",
                "start": 107,
                "end": 112,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 107,
                  "end": 110,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
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
                "start": 103,
                "end": 106
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
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
      "start": 117,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 126,
            "end": 136,
            "expression": {
              "type": "NewExpression",
              "start": 131,
              "end": 136,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 127,
              "end": 130
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 161,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 148,
            "end": 160,
            "expression": {
              "type": "NewExpression",
              "start": 153,
              "end": 160,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 157,
                "end": 160,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
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
              "start": 149,
              "end": 152
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 171,
            "end": 185,
            "computed": false,
            "object": {
              "type": "TSTypeAssertion",
              "start": 172,
              "end": 182,
              "expression": {
                "type": "NewExpression",
                "start": 177,
                "end": 182,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 173,
                "end": 176
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
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
