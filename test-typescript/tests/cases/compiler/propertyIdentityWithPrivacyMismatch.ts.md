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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 21,
        "value": "mod1",
        "raw": "'mod1'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 66,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 28,
            "end": 64,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 37,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 38,
              "end": 64,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 48,
                  "end": 58,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "name": "n",
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
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 67,
      "end": 133,
      "id": {
        "type": "Literal",
        "start": 82,
        "end": 88,
        "value": "mod2",
        "raw": "'mod2'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 89,
        "end": 133,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 95,
            "end": 131,
            "id": {
              "type": "Identifier",
              "start": 101,
              "end": 104,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 105,
              "end": 131,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 115,
                  "end": 125,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 124,
                    "name": "n",
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
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 76,
        "end": 91,
        "expression": {
          "type": "Literal",
          "start": 84,
          "end": 90,
          "value": "mod1",
          "raw": "'mod1'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 93,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 102,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 105,
        "end": 120,
        "expression": {
          "type": "Literal",
          "start": 113,
          "end": 119,
          "value": "mod2",
          "raw": "'mod2'"
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 135,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 135,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 129,
                "end": 135,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 129,
                  "end": 135,
                  "left": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 131,
                    "name": "m1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 135,
                    "name": "Foo",
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 150,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 144,
                "end": 150,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 144,
                  "end": 150,
                  "left": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 146,
                    "name": "m2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 150,
                    "name": "Foo",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 195,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 205,
        "name": "Foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 206,
        "end": 224,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 212,
            "end": 222,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "name": "n",
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
            "accessibility": "private"
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
      "start": 225,
      "end": 254,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 235,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 236,
        "end": 254,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 242,
            "end": 252,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "name": "n",
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
            "accessibility": "private"
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
      "start": 255,
      "end": 267,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 266,
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 266,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 266,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 262,
                "end": 266,
                "typeName": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 266,
                  "name": "Foo1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 279,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 273,
              "end": 279,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 275,
                "end": 279,
                "typeName": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 279,
                  "name": "Foo2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
