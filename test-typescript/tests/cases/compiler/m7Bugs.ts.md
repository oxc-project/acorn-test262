__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 323,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 14,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 34,
        "name": "ISomething",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 35,
        "end": 60,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 58,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 49,
              "name": "something",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 57,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 51,
                "end": 57
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 79,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 79,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 69,
                "end": 79,
                "typeName": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 79,
                  "name": "ISomething",
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
              "typeName": {
                "type": "Identifier",
                "start": 83,
                "end": 93,
                "name": "ISomething",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 117,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 128,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 129,
        "end": 143,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 131,
            "end": 141,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 140,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 134,
                "end": 140
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 145,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 156,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 165,
          "end": 166,
          "expression": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 167,
        "end": 170,
        "body": []
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 180,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 180,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 179,
                "end": 180,
                "typeName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 180,
                  "name": "B",
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
              "typeName": {
                "type": "Identifier",
                "start": 184,
                "end": 185,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 192,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 200,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 201,
        "end": 223,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 204,
            "end": 221,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "name": "x",
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
              "start": 212,
              "end": 220,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 214,
                "end": 220
              }
            },
            "accessibility": "public"
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
      "end": 247,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 233,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 242,
        "end": 244,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 245,
        "end": 247,
        "body": []
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
      "start": 249,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 259,
            "name": "y1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 259,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 257,
                "end": 259,
                "typeName": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 259,
                  "name": "C1",
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
          "init": {
            "type": "NewExpression",
            "start": 262,
            "end": 270,
            "callee": {
              "type": "Identifier",
              "start": 266,
              "end": 268,
              "name": "C2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 282,
            "name": "y2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 282,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 280,
                "end": 282,
                "typeName": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 282,
                  "name": "C1",
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
          "init": {
            "type": "TSTypeAssertion",
            "start": 285,
            "end": 298,
            "expression": {
              "type": "NewExpression",
              "start": 290,
              "end": 298,
              "callee": {
                "type": "Identifier",
                "start": 294,
                "end": 296,
                "name": "C2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 286,
              "end": 288,
              "typeName": {
                "type": "Identifier",
                "start": 286,
                "end": 288,
                "name": "C1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
      "start": 300,
      "end": 321,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 320,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 310,
            "name": "y3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 306,
              "end": 310,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 308,
                "end": 310,
                "typeName": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 310,
                  "name": "C1",
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
              "typeName": {
                "type": "Identifier",
                "start": 314,
                "end": 316,
                "name": "C1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
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
