__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 32
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 33,
                "end": 36
              },
              "abstract": false,
              "declare": false,
              "start": 24,
              "end": 36
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 17,
            "end": 36
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 55
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
                      "start": 56,
                      "end": 57
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 56,
                    "end": 57
                  }
                ],
                "start": 55,
                "end": 58
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 59,
                "end": 62
              },
              "abstract": false,
              "declare": false,
              "start": 47,
              "end": 62
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 40,
            "end": 62
          }
        ],
        "start": 12,
        "end": 64
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 64
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 76
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "D1",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 97
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 107
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 110
                },
                "optional": false,
                "computed": false,
                "start": 106,
                "end": 110
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 111,
                "end": 114
              },
              "abstract": false,
              "declare": false,
              "start": 89,
              "end": 114
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 82,
            "end": 114
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "D2",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 133
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
                      "start": 134,
                      "end": 135
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 134,
                    "end": 135
                  }
                ],
                "start": 133,
                "end": 136
              },
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 146
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 149
                },
                "optional": false,
                "computed": false,
                "start": 145,
                "end": 149
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
                      "start": 150,
                      "end": 151
                    },
                    "typeArguments": null,
                    "start": 150,
                    "end": 151
                  }
                ],
                "start": 149,
                "end": 152
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 153,
                "end": 156
              },
              "abstract": false,
              "declare": false,
              "start": 125,
              "end": 156
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 118,
            "end": 156
          }
        ],
        "start": 77,
        "end": 158
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 65,
      "end": 158
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 165
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 173
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 176
              },
              "optional": false,
              "computed": false,
              "start": 172,
              "end": 176
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 177,
                  "end": 183
                }
              ],
              "start": 176,
              "end": 184
            },
            "arguments": [],
            "start": 168,
            "end": 186
          },
          "definite": false,
          "start": 164,
          "end": 186
        }
      ],
      "declare": false,
      "start": 160,
      "end": 187
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 205
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 213
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "D1",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 216
              },
              "optional": false,
              "computed": false,
              "start": 212,
              "end": 216
            },
            "typeArguments": null,
            "arguments": [],
            "start": 208,
            "end": 218
          },
          "definite": false,
          "start": 204,
          "end": 218
        }
      ],
      "declare": false,
      "start": 200,
      "end": 219
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
            "name": "n2",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 238
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 245,
                "end": 246
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "D2",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 249
              },
              "optional": false,
              "computed": false,
              "start": 245,
              "end": 249
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 250,
                  "end": 256
                }
              ],
              "start": 249,
              "end": 257
            },
            "arguments": [],
            "start": 241,
            "end": 259
          },
          "definite": false,
          "start": 236,
          "end": 259
        }
      ],
      "declare": false,
      "start": 232,
      "end": 260
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
            "name": "n3",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 276
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 284
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "D2",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 287
              },
              "optional": false,
              "computed": false,
              "start": 283,
              "end": 287
            },
            "typeArguments": null,
            "arguments": [],
            "start": 279,
            "end": 289
          },
          "definite": false,
          "start": 274,
          "end": 289
        }
      ],
      "declare": false,
      "start": 270,
      "end": 290
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 311
}
```
