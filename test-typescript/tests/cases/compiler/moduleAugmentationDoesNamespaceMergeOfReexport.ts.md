__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 77,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 77,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 21,
          "name": "Root",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 22,
          "end": 77,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 28,
              "end": 75,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 35,
                "end": 75,
                "id": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 49,
                  "end": 75,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 59,
                      "end": 69,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 59,
                        "end": 60,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 60,
                        "end": 68,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 62,
                          "end": 68
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
              "attributes": [],
              "exportKind": "type"
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
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
  "end": 232,
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
            "name": "ns",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 164,
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
        "end": 164,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 69,
            "end": 162,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 76,
              "end": 162,
              "id": {
                "type": "Identifier",
                "start": 86,
                "end": 90,
                "name": "Root",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 91,
                "end": 162,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 101,
                    "end": 156,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 108,
                      "end": 156,
                      "id": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 121,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 122,
                        "end": 156,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 136,
                            "end": 146,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 136,
                              "end": 140,
                              "name": "self",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 140,
                              "end": 145,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 142,
                                "end": 145,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 142,
                                  "end": 145,
                                  "name": "Foo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
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
                    "attributes": [],
                    "exportKind": "type"
                  }
                ]
              },
              "kind": "namespace",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 194,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 194,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 194,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 183,
                "end": 194,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 183,
                  "end": 194,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 183,
                    "end": 190,
                    "left": {
                      "type": "Identifier",
                      "start": 183,
                      "end": 185,
                      "name": "ns",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 190,
                      "name": "Root",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 194,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 197,
      "end": 201,
      "expression": {
        "type": "MemberExpression",
        "start": 197,
        "end": 200,
        "object": {
          "type": "Identifier",
          "start": 197,
          "end": 198,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 199,
          "end": 200,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 209,
      "expression": {
        "type": "MemberExpression",
        "start": 202,
        "end": 208,
        "object": {
          "type": "Identifier",
          "start": 202,
          "end": 203,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 204,
          "end": 208,
          "name": "self",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 210,
      "end": 219,
      "expression": {
        "type": "MemberExpression",
        "start": 210,
        "end": 218,
        "object": {
          "type": "MemberExpression",
          "start": 210,
          "end": 216,
          "object": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 212,
            "end": 216,
            "name": "self",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 217,
          "end": 218,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 220,
      "end": 232,
      "expression": {
        "type": "MemberExpression",
        "start": 220,
        "end": 231,
        "object": {
          "type": "MemberExpression",
          "start": 220,
          "end": 226,
          "object": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 222,
            "end": 226,
            "name": "self",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 227,
          "end": 231,
          "name": "self",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
