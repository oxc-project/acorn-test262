__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ISomething",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 34
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 49
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 51,
                "end": 57
              },
              "start": 49,
              "end": 57
            },
            "accessibility": null,
            "static": false,
            "start": 40,
            "end": 58
          }
        ],
        "start": 35,
        "end": 60
      },
      "declare": false,
      "start": 14,
      "end": 60
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ISomething",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 79
                },
                "typeArguments": null,
                "start": 69,
                "end": 79
              },
              "start": 67,
              "end": 79
            },
            "start": 66,
            "end": 79
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ISomething",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 93
              },
              "typeArguments": null,
              "start": 83,
              "end": 93
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 95,
              "end": 98
            },
            "start": 82,
            "end": 99
          },
          "definite": false,
          "start": 66,
          "end": 99
        }
      ],
      "declare": false,
      "start": 62,
      "end": 100
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 128
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 134,
                "end": 140
              },
              "start": 132,
              "end": 140
            },
            "accessibility": null,
            "static": false,
            "start": 131,
            "end": 141
          }
        ],
        "start": 129,
        "end": 143
      },
      "declare": false,
      "start": 117,
      "end": 143
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 156
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 166
          },
          "typeArguments": null,
          "start": 165,
          "end": 166
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 167,
        "end": 170
      },
      "declare": false,
      "start": 145,
      "end": 170
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 180
                },
                "typeArguments": null,
                "start": 179,
                "end": 180
              },
              "start": 177,
              "end": 180
            },
            "start": 176,
            "end": 180
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 185
              },
              "typeArguments": null,
              "start": 184,
              "end": 185
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 186,
              "end": 189
            },
            "start": 183,
            "end": 189
          },
          "definite": false,
          "start": 176,
          "end": 189
        }
      ],
      "declare": false,
      "start": 172,
      "end": 190
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 200
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 212
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 214,
                "end": 220
              },
              "start": 212,
              "end": 220
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 204,
            "end": 221
          }
        ],
        "start": 201,
        "end": 223
      },
      "abstract": false,
      "declare": false,
      "start": 192,
      "end": 223
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 233
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 244
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 245,
        "end": 247
      },
      "abstract": false,
      "declare": false,
      "start": 225,
      "end": 247
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
            "name": "y1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 259
                },
                "typeArguments": null,
                "start": 257,
                "end": 259
              },
              "start": 255,
              "end": 259
            },
            "start": 253,
            "end": 259
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 268
            },
            "typeArguments": null,
            "arguments": [],
            "start": 262,
            "end": 270
          },
          "definite": false,
          "start": 253,
          "end": 270
        }
      ],
      "declare": false,
      "start": 249,
      "end": 271
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
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 282
                },
                "typeArguments": null,
                "start": 280,
                "end": 282
              },
              "start": 278,
              "end": 282
            },
            "start": 276,
            "end": 282
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 288
              },
              "typeArguments": null,
              "start": 286,
              "end": 288
            },
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 296
              },
              "typeArguments": null,
              "arguments": [],
              "start": 290,
              "end": 298
            },
            "start": 285,
            "end": 298
          },
          "definite": false,
          "start": 276,
          "end": 298
        }
      ],
      "declare": false,
      "start": 272,
      "end": 299
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
            "name": "y3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 310
                },
                "typeArguments": null,
                "start": 308,
                "end": 310
              },
              "start": 306,
              "end": 310
            },
            "start": 304,
            "end": 310
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 316
              },
              "typeArguments": null,
              "start": 314,
              "end": 316
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 318,
              "end": 320
            },
            "start": 313,
            "end": 320
          },
          "definite": false,
          "start": 304,
          "end": 320
        }
      ],
      "declare": false,
      "start": 300,
      "end": 321
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 14,
  "end": 322
}
```
