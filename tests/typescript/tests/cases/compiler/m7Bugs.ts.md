__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 322,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 14,
      "end": 60,
      "body": {
        "type": "TSInterfaceBody",
        "start": 35,
        "end": 60,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 58,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 49,
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 57,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 51,
                "end": 57
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 34,
        "decorators": [],
        "name": "ISomething",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 62,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 99,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 79,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 79,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 69,
                "end": 79,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 79,
                  "decorators": [],
                  "name": "ISomething",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 82,
            "end": 99,
            "expression": {
              "type": "ObjectExpression",
              "start": 95,
              "end": 98,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 83,
              "end": 93,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 83,
                "end": 93,
                "decorators": [],
                "name": "ISomething",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 117,
      "end": 143,
      "body": {
        "type": "TSInterfaceBody",
        "start": 129,
        "end": 143,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 131,
            "end": 141,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
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
              "start": 132,
              "end": 140,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 134,
                "end": 140
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 128,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 145,
      "end": 170,
      "body": {
        "type": "TSInterfaceBody",
        "start": 167,
        "end": 170,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 165,
          "end": 166,
          "expression": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 156,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 189,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 180,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 180,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 179,
                "end": 180,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 180,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 183,
            "end": 189,
            "expression": {
              "type": "ObjectExpression",
              "start": 186,
              "end": 189,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 184,
              "end": 185,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 184,
                "end": 185,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 192,
      "end": 223,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 201,
        "end": 223,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 204,
            "end": 221,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
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
              "start": 212,
              "end": 220,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 214,
                "end": 220
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
        "start": 198,
        "end": 200,
        "decorators": [],
        "name": "C1",
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
      "end": 247,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 245,
        "end": 247,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 233,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 242,
        "end": 244,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 270,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 259,
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 259,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 257,
                "end": 259,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 259,
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 262,
            "end": 270,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 266,
              "end": 268,
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 298,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 282,
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 282,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 280,
                "end": 282,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 282,
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 285,
            "end": 298,
            "expression": {
              "type": "NewExpression",
              "start": 290,
              "end": 298,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 294,
                "end": 296,
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 286,
              "end": 288,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 286,
                "end": 288,
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 321,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 320,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 310,
            "decorators": [],
            "name": "y3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 306,
              "end": 310,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 308,
                "end": 310,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 310,
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 313,
            "end": 320,
            "expression": {
              "type": "ObjectExpression",
              "start": 318,
              "end": 320,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 314,
              "end": 316,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 314,
                "end": 316,
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null
              }
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
