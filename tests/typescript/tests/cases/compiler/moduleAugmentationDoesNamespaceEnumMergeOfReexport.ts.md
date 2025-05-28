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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 97,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 21,
          "decorators": [],
          "name": "Root",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 22,
          "end": 97,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 48,
              "end": 95,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 55,
                "end": 95,
                "id": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 68,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 69,
                  "end": 95,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 79,
                      "end": 89,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 80,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 80,
                        "end": 88,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 82,
                          "end": 88
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 22,
        "value": "./file",
        "raw": "\"./file\""
      },
      "attributes": [],
      "exportKind": "value"
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
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 32,
        "value": "./reexport",
        "raw": "\"./reexport\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 176,
      "id": {
        "type": "Literal",
        "start": 50,
        "end": 62,
        "value": "./reexport",
        "raw": "\"./reexport\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 63,
        "end": 176,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 118,
            "end": 174,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 125,
              "end": 174,
              "id": {
                "type": "Identifier",
                "start": 130,
                "end": 134,
                "decorators": [],
                "name": "Root",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSEnumBody",
                "start": 135,
                "end": 174,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 145,
                    "end": 146,
                    "id": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 156,
                    "end": 157,
                    "id": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 157,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 167,
                    "end": 168,
                    "id": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              },
              "const": false,
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
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 178,
      "end": 207,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 206,
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
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 237,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 236,
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
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 227,
            "end": 236,
            "object": {
              "type": "MemberExpression",
              "start": 227,
              "end": 234,
              "object": {
                "type": "Identifier",
                "start": 227,
                "end": 229,
                "decorators": [],
                "name": "ns",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 230,
                "end": 234,
                "decorators": [],
                "name": "Root",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 239,
      "end": 243,
      "expression": {
        "type": "MemberExpression",
        "start": 239,
        "end": 242,
        "object": {
          "type": "Identifier",
          "start": 239,
          "end": 240,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 241,
          "end": 242,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
