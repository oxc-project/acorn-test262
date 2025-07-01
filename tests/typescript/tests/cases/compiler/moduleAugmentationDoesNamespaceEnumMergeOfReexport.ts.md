__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Root",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 21
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 68
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
                        "start": 79,
                        "end": 80
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 82,
                          "end": 88
                        },
                        "start": 80,
                        "end": 88
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 79,
                      "end": 89
                    }
                  ],
                  "start": 69,
                  "end": 95
                },
                "declare": false,
                "start": 55,
                "end": 95
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 48,
              "end": 95
            }
          ],
          "start": 22,
          "end": 97
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 97
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 97
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 97
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./file",
        "raw": "\"./file\"",
        "start": 14,
        "end": 22
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 23
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 23
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./reexport",
        "raw": "\"./reexport\"",
        "start": 20,
        "end": 32
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./reexport",
        "raw": "\"./reexport\"",
        "start": 50,
        "end": 62
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Root",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 134
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 145,
                    "end": 146
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 156,
                      "end": 157
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 156,
                    "end": 157
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 167,
                      "end": 168
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 167,
                    "end": 168
                  }
                ],
                "start": 135,
                "end": 174
              },
              "const": false,
              "declare": false,
              "start": 125,
              "end": 174
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 118,
            "end": 174
          }
        ],
        "start": 63,
        "end": 176
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 35,
      "end": 176
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 195,
                      "end": 197
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Root",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 202
                    },
                    "start": 195,
                    "end": 202
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 203,
                    "end": 206
                  },
                  "start": 195,
                  "end": 206
                },
                "typeArguments": null,
                "start": 195,
                "end": 206
              },
              "start": 193,
              "end": 206
            },
            "start": 192,
            "end": 206
          },
          "init": null,
          "definite": false,
          "start": 192,
          "end": 206
        }
      ],
      "declare": true,
      "start": 178,
      "end": 207
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ns",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 219
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Root",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 224
                  },
                  "start": 217,
                  "end": 224
                },
                "typeArguments": null,
                "start": 217,
                "end": 224
              },
              "start": 215,
              "end": 224
            },
            "start": 214,
            "end": 224
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ns",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 229
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Root",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 234
              },
              "optional": false,
              "computed": false,
              "start": 227,
              "end": 234
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 236
            },
            "optional": false,
            "computed": false,
            "start": 227,
            "end": 236
          },
          "definite": false,
          "start": 214,
          "end": 236
        }
      ],
      "declare": false,
      "start": 208,
      "end": 237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 240
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 241,
          "end": 242
        },
        "optional": false,
        "computed": false,
        "start": 239,
        "end": 242
      },
      "directive": null,
      "start": 239,
      "end": 243
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 243
}
```
