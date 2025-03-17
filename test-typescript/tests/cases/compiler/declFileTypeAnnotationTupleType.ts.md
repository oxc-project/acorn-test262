__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 273,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
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
      "type": "TSModuleDeclaration",
      "start": 12,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 81,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 49,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 34,
              "end": 49,
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 42,
                "end": 49,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 54,
            "end": 79,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 61,
              "end": 79,
              "id": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 72,
                "end": 79,
                "body": []
              },
              "decorators": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 68,
                "end": 71,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 69,
                    "end": 70,
                    "name": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 96,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 89,
        "end": 92,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 91,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 153,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 130,
            "name": "k",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 130,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 122,
                "end": 130,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 123,
                    "end": 124,
                    "typeName": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 126,
                    "end": 129,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 126,
                      "end": 129,
                      "left": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 127,
                        "name": "m",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 129,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 133,
            "end": 153,
            "elements": [
              {
                "type": "NewExpression",
                "start": 134,
                "end": 141,
                "callee": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 143,
                "end": 152,
                "callee": {
                  "type": "MemberExpression",
                  "start": 147,
                  "end": 150,
                  "object": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 148,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 150,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 155,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "name": "l",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 163,
            "end": 164,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
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
      "start": 167,
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 261,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 207,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 207,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 174,
                "end": 207,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 175,
                    "end": 184,
                    "typeName": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 176,
                      "name": "g",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 176,
                      "end": 184,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 177,
                          "end": 183
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 186,
                    "end": 197,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 186,
                      "end": 189,
                      "left": {
                        "type": "Identifier",
                        "start": 186,
                        "end": 187,
                        "name": "m",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 189,
                        "name": "g",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 189,
                      "end": 197,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 190,
                          "end": 196
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 199,
                    "end": 206,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 202,
                      "end": 206,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 205,
                        "end": 206,
                        "typeName": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 206,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 210,
            "end": 261,
            "elements": [
              {
                "type": "NewExpression",
                "start": 211,
                "end": 226,
                "callee": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 216,
                  "name": "g",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 216,
                  "end": 224,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 217,
                      "end": 223
                    }
                  ]
                }
              },
              {
                "type": "NewExpression",
                "start": 228,
                "end": 245,
                "callee": {
                  "type": "MemberExpression",
                  "start": 232,
                  "end": 235,
                  "object": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 233,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 235,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 235,
                  "end": 243,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 236,
                      "end": 242
                    }
                  ]
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 247,
                "end": 260,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "NewExpression",
                  "start": 253,
                  "end": 260,
                  "callee": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 258,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 272,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 268,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 271,
            "end": 272,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
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
