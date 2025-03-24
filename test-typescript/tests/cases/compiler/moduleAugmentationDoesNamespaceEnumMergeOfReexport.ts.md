__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 97,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 97,
        "body": {
          "type": "TSModuleBlock",
          "start": 22,
          "end": 97,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 48,
              "end": 95,
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 55,
                "end": 95,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 69,
                  "end": 95,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 79,
                      "end": 89,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 80,
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
                        "start": 80,
                        "end": 88,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 82,
                          "end": 88
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 68,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null
              },
              "exportKind": "type",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 21,
          "decorators": [],
          "name": "Root",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 22,
        "raw": "\"./file\"",
        "value": "./file"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 243,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 32,
        "raw": "\"./reexport\"",
        "value": "./reexport"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 176,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 63,
        "end": 176,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 118,
            "end": 174,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 125,
              "end": 174,
              "body": {
                "type": "TSEnumBody",
                "start": 135,
                "end": 174,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 145,
                    "end": 146,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 156,
                    "end": 157,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 157,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 167,
                    "end": 168,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 130,
                "end": 134,
                "decorators": [],
                "name": "Root",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 50,
        "end": 62,
        "raw": "\"./reexport\"",
        "value": "./reexport"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 178,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 206,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 206,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 206,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 206,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 195,
                  "end": 206,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 195,
                    "end": 202,
                    "left": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 197,
                      "decorators": [],
                      "name": "ns",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 202,
                      "decorators": [],
                      "name": "Root",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 206,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 236,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 224,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 224,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 217,
                "end": 224,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 217,
                  "end": 224,
                  "left": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 219,
                    "decorators": [],
                    "name": "ns",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 224,
                    "decorators": [],
                    "name": "Root",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 227,
            "end": 236,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 227,
              "end": 234,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 227,
                "end": 229,
                "decorators": [],
                "name": "ns",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 230,
                "end": 234,
                "decorators": [],
                "name": "Root",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 239,
      "end": 243,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 239,
        "end": 242,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 239,
          "end": 240,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 241,
          "end": 242,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
