__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 66,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 66,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 28,
            "end": 64,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 38,
              "end": 64,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 48,
                  "end": 58,
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 37,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 21,
        "raw": "'mod1'",
        "value": "mod1",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 67,
      "end": 133,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 89,
        "end": 133,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 95,
            "end": 131,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 105,
              "end": 131,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 115,
                  "end": 125,
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 124,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 101,
              "end": 104,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 82,
        "end": 88,
        "raw": "'mod2'",
        "value": "mod2",
        "regex": null,
        "bigint": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 280,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 64,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 73,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 76,
        "end": 91,
        "expression": {
          "type": "Literal",
          "start": 84,
          "end": 90,
          "raw": "'mod1'",
          "value": "mod1",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 93,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 102,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 105,
        "end": 120,
        "expression": {
          "type": "Literal",
          "start": 113,
          "end": 119,
          "raw": "'mod2'",
          "value": "mod2",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 135,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 135,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 129,
                "end": 135,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 129,
                  "end": 135,
                  "left": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 131,
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 135,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 150,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 144,
                "end": 150,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 144,
                  "end": 150,
                  "left": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 146,
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 150,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 195,
      "end": 224,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 206,
        "end": 224,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 212,
            "end": 222,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 205,
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 225,
      "end": 254,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 236,
        "end": 254,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 242,
            "end": 252,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 235,
        "decorators": [],
        "name": "Foo2",
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
      "start": 255,
      "end": 267,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 266,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 266,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 266,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 262,
                "end": 266,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 266,
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 268,
      "end": 280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 272,
          "end": 279,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 279,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 273,
              "end": 279,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 275,
                "end": 279,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 279,
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
