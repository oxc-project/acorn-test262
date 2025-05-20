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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 12,
      "end": 81,
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 81,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 49,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 34,
              "end": 49,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 42,
                "end": 49,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 54,
            "end": 79,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 61,
              "end": 79,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 72,
                "end": 79,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 68,
                "end": 71,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 69,
                    "end": 70,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 96,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 96,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 89,
        "end": 92,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 91,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 130,
            "decorators": [],
            "name": "k",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 126,
                    "end": 129,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 126,
                      "end": 129,
                      "left": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 127,
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 129,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              }
            }
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
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 143,
                "end": 152,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 147,
                  "end": 150,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 148,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 150,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 163,
            "end": 164,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 207,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 176,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 186,
                    "end": 197,
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
                    },
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 186,
                      "end": 189,
                      "left": {
                        "type": "Identifier",
                        "start": 186,
                        "end": 187,
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 189,
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 199,
                    "end": 206,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 202,
                      "end": 206,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 205,
                        "end": 206,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 206,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
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
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 216,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 232,
                  "end": 235,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 233,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 235,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
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
                "async": false,
                "body": {
                  "type": "NewExpression",
                  "start": 253,
                  "end": 260,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 258,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 268,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 271,
            "end": 272,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
