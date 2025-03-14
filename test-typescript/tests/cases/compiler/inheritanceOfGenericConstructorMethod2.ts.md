inheritanceOfGenericConstructorMethod2.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 61,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 14,
            "end": 33,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 21,
              "end": 33,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 33,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 27,
                "end": 29,
                "decorators": [],
                "name": "C1",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 37,
            "end": 59,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 44,
              "end": 59,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 56,
                "end": 59,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 50,
                "end": 52,
                "decorators": [],
                "name": "C2",
                "optional": false
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 52,
                "end": 55,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 53,
                    "end": 54,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "decorators": [],
                      "name": "T",
                      "optional": false
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 62,
      "end": 152,
      "body": {
        "type": "TSModuleBlock",
        "start": 71,
        "end": 152,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 76,
            "end": 108,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 83,
              "end": 108,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 105,
                "end": 108,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 89,
                "end": 91,
                "decorators": [],
                "name": "D1",
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "MemberExpression",
                "start": 100,
                "end": 104,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "decorators": [],
                  "name": "M",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 104,
                  "decorators": [],
                  "name": "C1",
                  "optional": false
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 112,
            "end": 150,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 119,
              "end": 150,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 147,
                "end": 150,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 125,
                "end": 127,
                "decorators": [],
                "name": "D2",
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "MemberExpression",
                "start": 139,
                "end": 143,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "decorators": [],
                  "name": "M",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 143,
                  "decorators": [],
                  "name": "C2",
                  "optional": false
                }
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
                      "optional": false
                    }
                  }
                ]
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
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "decorators": [],
                      "name": "T",
                      "optional": false
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
        "start": 69,
        "end": 70,
        "decorators": [],
        "name": "N",
        "optional": false
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 162,
            "end": 180,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 166,
              "end": 170,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "decorators": [],
                "name": "M",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 168,
                "end": 170,
                "decorators": [],
                "name": "C2",
                "optional": false
              }
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
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 199,
            "decorators": [],
            "name": "n",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 202,
            "end": 212,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 206,
              "end": 210,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 206,
                "end": 207,
                "decorators": [],
                "name": "N",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 208,
                "end": 210,
                "decorators": [],
                "name": "D1",
                "optional": false
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
      "start": 226,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 253,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 232,
            "decorators": [],
            "name": "n2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 235,
            "end": 253,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 239,
              "end": 243,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 239,
                "end": 240,
                "decorators": [],
                "name": "N",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 241,
                "end": 243,
                "decorators": [],
                "name": "D2",
                "optional": false
              }
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
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 270,
            "decorators": [],
            "name": "n3",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 273,
            "end": 283,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 277,
              "end": 281,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 277,
                "end": 278,
                "decorators": [],
                "name": "N",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 279,
                "end": 281,
                "decorators": [],
                "name": "D2",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
