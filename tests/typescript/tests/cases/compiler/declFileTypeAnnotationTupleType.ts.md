__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 8,
        "end": 11
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 23
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 44
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 45,
                "end": 52
              },
              "abstract": false,
              "declare": false,
              "start": 37,
              "end": 52
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 30,
            "end": 52
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 71
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
                      "start": 72,
                      "end": 73
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 72,
                    "end": 73
                  }
                ],
                "start": 71,
                "end": 74
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 75,
                "end": 82
              },
              "abstract": false,
              "declare": false,
              "start": 64,
              "end": 82
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 57,
            "end": 82
          }
        ],
        "start": 24,
        "end": 84
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 12,
      "end": 84
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 92
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
              "start": 93,
              "end": 94
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 93,
            "end": 94
          }
        ],
        "start": 92,
        "end": 95
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 96,
        "end": 99
      },
      "abstract": false,
      "declare": false,
      "start": 85,
      "end": 99
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
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 126,
                      "end": 127
                    },
                    "typeArguments": null,
                    "start": 126,
                    "end": 127
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 129,
                        "end": 130
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 131,
                        "end": 132
                      },
                      "start": 129,
                      "end": 132
                    },
                    "typeArguments": null,
                    "start": 129,
                    "end": 132
                  }
                ],
                "start": 125,
                "end": 133
              },
              "start": 123,
              "end": 133
            },
            "start": 122,
            "end": 133
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 142
                },
                "typeArguments": null,
                "arguments": [],
                "start": 137,
                "end": 144
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 151
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 152,
                    "end": 153
                  },
                  "optional": false,
                  "computed": false,
                  "start": 150,
                  "end": 153
                },
                "typeArguments": null,
                "arguments": [],
                "start": 146,
                "end": 155
              }
            ],
            "start": 136,
            "end": 156
          },
          "definite": false,
          "start": 122,
          "end": 156
        }
      ],
      "declare": false,
      "start": 118,
      "end": 157
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
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 163
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 167
          },
          "definite": false,
          "start": 162,
          "end": 167
        }
      ],
      "declare": false,
      "start": 158,
      "end": 168
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
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 179
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 180,
                          "end": 186
                        }
                      ],
                      "start": 179,
                      "end": 187
                    },
                    "start": 178,
                    "end": 187
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 190
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 192
                      },
                      "start": 189,
                      "end": 192
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 193,
                          "end": 199
                        }
                      ],
                      "start": 192,
                      "end": 200
                    },
                    "start": 189,
                    "end": 200
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 208,
                          "end": 209
                        },
                        "typeArguments": null,
                        "start": 208,
                        "end": 209
                      },
                      "start": 205,
                      "end": 209
                    },
                    "start": 202,
                    "end": 209
                  }
                ],
                "start": 177,
                "end": 210
              },
              "start": 175,
              "end": 210
            },
            "start": 174,
            "end": 210
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 219
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 220,
                      "end": 226
                    }
                  ],
                  "start": 219,
                  "end": 227
                },
                "arguments": [],
                "start": 214,
                "end": 229
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 236
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 238
                  },
                  "optional": false,
                  "computed": false,
                  "start": 235,
                  "end": 238
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 239,
                      "end": 245
                    }
                  ],
                  "start": 238,
                  "end": 246
                },
                "arguments": [],
                "start": 231,
                "end": 248
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 260,
                    "end": 261
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 256,
                  "end": 263
                },
                "id": null,
                "generator": false,
                "start": 250,
                "end": 263
              }
            ],
            "start": 213,
            "end": 264
          },
          "definite": false,
          "start": 174,
          "end": 264
        }
      ],
      "declare": false,
      "start": 170,
      "end": 265
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 271
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 275
          },
          "definite": false,
          "start": 270,
          "end": 275
        }
      ],
      "declare": false,
      "start": 266,
      "end": 276
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 276
}
```
