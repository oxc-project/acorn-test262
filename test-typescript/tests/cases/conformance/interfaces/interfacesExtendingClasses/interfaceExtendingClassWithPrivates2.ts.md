__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 344,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 36,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 36,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 34,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
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
        "end": 9,
        "decorators": [],
        "name": "Foo",
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
      "start": 38,
      "end": 74,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 74,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 72,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 71,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 65,
                "end": 71
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
        "start": 44,
        "end": 47,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 76,
      "end": 118,
      "body": {
        "type": "TSInterfaceBody",
        "start": 106,
        "end": 118,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 97,
          "end": 100,
          "expression": {
            "type": "Identifier",
            "start": 97,
            "end": 100,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 102,
          "end": 105,
          "expression": {
            "type": "Identifier",
            "start": 102,
            "end": 105,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 88,
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 120,
      "end": 177,
      "body": {
        "type": "TSInterfaceBody",
        "start": 150,
        "end": 177,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 165,
            "end": 175,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 166,
              "end": 174,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 168,
                "end": 174
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 141,
          "end": 144,
          "expression": {
            "type": "Identifier",
            "start": 141,
            "end": 144,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 146,
          "end": 149,
          "expression": {
            "type": "Identifier",
            "start": 146,
            "end": 149,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 132,
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 179,
      "end": 215,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 189,
        "end": 215,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 195,
            "end": 213,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 204,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 204,
              "end": 212,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 206,
                "end": 212
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
        "start": 185,
        "end": 188,
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 217,
      "end": 265,
      "body": {
        "type": "TSInterfaceBody",
        "start": 247,
        "end": 265,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 253,
            "end": 263,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 253,
              "end": 254,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 262,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 256,
                "end": 262
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 238,
          "end": 241,
          "expression": {
            "type": "Identifier",
            "start": 238,
            "end": 241,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 243,
          "end": 246,
          "expression": {
            "type": "Identifier",
            "start": 243,
            "end": 246,
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 229,
        "decorators": [],
        "name": "I5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 267,
      "end": 277,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 276,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 271,
            "end": 276,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 272,
              "end": 276,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 274,
                "end": 276,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 276,
                  "decorators": [],
                  "name": "I5",
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
      "start": 278,
      "end": 298,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 297,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 291,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 291,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 285,
                "end": 291
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 294,
            "end": 297,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 294,
              "end": 295,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 296,
              "end": 297,
              "decorators": [],
              "name": "z",
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
      "start": 299,
      "end": 312,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 303,
          "end": 311,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 303,
            "end": 305,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 308,
            "end": 311,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 308,
              "end": 309,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
              "decorators": [],
              "name": "x",
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
      "start": 322,
      "end": 335,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 334,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 328,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 331,
            "end": 334,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 331,
              "end": 332,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
              "decorators": [],
              "name": "y",
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
