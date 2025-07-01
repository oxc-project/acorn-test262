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
                  "start": 45,
                  "end": 48
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
                        "start": 59,
                        "end": 60
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 62,
                          "end": 68
                        },
                        "start": 60,
                        "end": 68
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 59,
                      "end": 69
                    }
                  ],
                  "start": 49,
                  "end": 75
                },
                "declare": false,
                "start": 35,
                "end": 75
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 28,
              "end": 75
            }
          ],
          "start": 22,
          "end": 77
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 77
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 77
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 77
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
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Root",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 90
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
                        "start": 118,
                        "end": 121
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
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 136,
                              "end": 140
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 142,
                                  "end": 145
                                },
                                "typeArguments": null,
                                "start": 142,
                                "end": 145
                              },
                              "start": 140,
                              "end": 145
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 136,
                            "end": 146
                          }
                        ],
                        "start": 122,
                        "end": 156
                      },
                      "declare": false,
                      "start": 108,
                      "end": 156
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 101,
                    "end": 156
                  }
                ],
                "start": 91,
                "end": 162
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 76,
              "end": 162
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 69,
            "end": 162
          }
        ],
        "start": 63,
        "end": 164
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 35,
      "end": 164
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
                      "start": 183,
                      "end": 185
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Root",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 190
                    },
                    "start": 183,
                    "end": 190
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 194
                  },
                  "start": 183,
                  "end": 194
                },
                "typeArguments": null,
                "start": 183,
                "end": 194
              },
              "start": 181,
              "end": 194
            },
            "start": 180,
            "end": 194
          },
          "init": null,
          "definite": false,
          "start": 180,
          "end": 194
        }
      ],
      "declare": true,
      "start": 166,
      "end": 195
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
          "start": 197,
          "end": 198
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 199,
          "end": 200
        },
        "optional": false,
        "computed": false,
        "start": 197,
        "end": 200
      },
      "directive": null,
      "start": 197,
      "end": 201
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
          "start": 202,
          "end": 203
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "self",
          "optional": false,
          "typeAnnotation": null,
          "start": 204,
          "end": 208
        },
        "optional": false,
        "computed": false,
        "start": 202,
        "end": 208
      },
      "directive": null,
      "start": 202,
      "end": 209
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 211
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 216
          },
          "optional": false,
          "computed": false,
          "start": 210,
          "end": 216
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 217,
          "end": 218
        },
        "optional": false,
        "computed": false,
        "start": 210,
        "end": 218
      },
      "directive": null,
      "start": 210,
      "end": 219
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 221
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 226
          },
          "optional": false,
          "computed": false,
          "start": 220,
          "end": 226
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "self",
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 231
        },
        "optional": false,
        "computed": false,
        "start": 220,
        "end": 231
      },
      "directive": null,
      "start": 220,
      "end": 232
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 232
}
```
