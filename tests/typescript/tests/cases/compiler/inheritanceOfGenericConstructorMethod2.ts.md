__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 305,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 27,
                "end": 29,
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 33,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 37,
            "end": 59,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 44,
              "end": 59,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 50,
                "end": 52,
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 56,
                "end": 59,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 89,
                "end": 91,
                "decorators": [],
                "name": "D1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "start": 100,
                "end": 104,
                "object": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 104,
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 105,
                "end": 108,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 112,
            "end": 150,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 119,
              "end": 150,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 125,
                "end": 127,
                "decorators": [],
                "name": "D2",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "superClass": {
                "type": "MemberExpression",
                "start": 139,
                "end": 143,
                "object": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 143,
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 147,
                "end": 150,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 180,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 168,
                "end": 170,
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 213,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 212,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 199,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 208,
                "end": 210,
                "decorators": [],
                "name": "D1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 226,
      "end": 254,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 232,
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 241,
                "end": 243,
                "decorators": [],
                "name": "D2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 284,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 283,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 270,
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 279,
                "end": 281,
                "decorators": [],
                "name": "D2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
