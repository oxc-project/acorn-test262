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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 31,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 29,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
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
      "type": "VariableDeclaration",
      "start": 33,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 42,
            "end": 48,
            "expression": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 43,
              "end": 46
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 59,
            "end": 69,
            "object": {
              "type": "TSTypeAssertion",
              "start": 60,
              "end": 66,
              "expression": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 61,
                "end": 64
              }
            },
            "property": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 79,
            "end": 91,
            "object": {
              "type": "TSTypeAssertion",
              "start": 80,
              "end": 88,
              "expression": {
                "type": "MemberExpression",
                "start": 85,
                "end": 88,
                "object": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 81,
                "end": 84
              }
            },
            "property": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 101,
            "end": 115,
            "object": {
              "type": "TSTypeAssertion",
              "start": 102,
              "end": 112,
              "expression": {
                "type": "CallExpression",
                "start": 107,
                "end": 112,
                "callee": {
                  "type": "MemberExpression",
                  "start": 107,
                  "end": 110,
                  "object": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 103,
                "end": 106
              }
            },
            "property": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 126,
            "end": 136,
            "expression": {
              "type": "NewExpression",
              "start": 131,
              "end": 136,
              "callee": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 127,
              "end": 130
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 148,
            "end": 160,
            "expression": {
              "type": "NewExpression",
              "start": 153,
              "end": 160,
              "callee": {
                "type": "MemberExpression",
                "start": 157,
                "end": 160,
                "object": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 149,
              "end": 152
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 171,
            "end": 185,
            "object": {
              "type": "TSTypeAssertion",
              "start": 172,
              "end": 182,
              "expression": {
                "type": "NewExpression",
                "start": 177,
                "end": 182,
                "callee": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 173,
                "end": 176
              }
            },
            "property": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
