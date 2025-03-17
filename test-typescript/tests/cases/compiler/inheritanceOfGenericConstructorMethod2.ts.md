__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 306,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 61,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 14,
            "end": 33,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 21,
              "end": 33,
              "id": {
                "type": "Identifier",
                "start": 27,
                "end": 29,
                "name": "C1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 33,
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
            "start": 37,
            "end": 59,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 44,
              "end": 59,
              "id": {
                "type": "Identifier",
                "start": 50,
                "end": 52,
                "name": "C2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 56,
                "end": 59,
                "body": []
              },
              "decorators": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 52,
                "end": 55,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 53,
                    "end": 54,
                    "name": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
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
      "type": "TSModuleDeclaration",
      "start": 62,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 71,
        "end": 152,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 76,
            "end": 108,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 83,
              "end": 108,
              "id": {
                "type": "Identifier",
                "start": 89,
                "end": 91,
                "name": "D1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "MemberExpression",
                "start": 100,
                "end": 104,
                "object": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 104,
                  "name": "C1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 105,
                "end": 108,
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
            "start": 112,
            "end": 150,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 119,
              "end": 150,
              "id": {
                "type": "Identifier",
                "start": 125,
                "end": 127,
                "name": "D2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "MemberExpression",
                "start": 139,
                "end": 143,
                "object": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 143,
                  "name": "C2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 147,
                "end": 150,
                "body": []
              },
              "decorators": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 127,
                "end": 130,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 128,
                    "end": 129,
                    "name": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
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
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 143,
                "end": 146,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 144,
                    "end": 145,
                    "typeName": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 145,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
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
      "type": "VariableDeclaration",
      "start": 154,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 180,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 162,
            "end": 180,
            "callee": {
              "type": "MemberExpression",
              "start": 166,
              "end": 170,
              "object": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 168,
                "end": 170,
                "name": "C2",
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
              "start": 170,
              "end": 178,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 171,
                  "end": 177
                }
              ]
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
      "start": 194,
      "end": 213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 212,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 199,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 202,
            "end": 212,
            "callee": {
              "type": "MemberExpression",
              "start": 206,
              "end": 210,
              "object": {
                "type": "Identifier",
                "start": 206,
                "end": 207,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 208,
                "end": 210,
                "name": "D1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 226,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 232,
            "name": "n2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 235,
            "end": 253,
            "callee": {
              "type": "MemberExpression",
              "start": 239,
              "end": 243,
              "object": {
                "type": "Identifier",
                "start": 239,
                "end": 240,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 241,
                "end": 243,
                "name": "D2",
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
              "start": 243,
              "end": 251,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 244,
                  "end": 250
                }
              ]
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
      "start": 264,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 283,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 270,
            "name": "n3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 273,
            "end": 283,
            "callee": {
              "type": "MemberExpression",
              "start": 277,
              "end": 281,
              "object": {
                "type": "Identifier",
                "start": 277,
                "end": 278,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 279,
                "end": 281,
                "name": "D2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
