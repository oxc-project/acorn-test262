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
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 77,
        "body": {
          "type": "TSModuleBlock",
          "start": 22,
          "end": 77,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 28,
              "end": 75,
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 35,
                "end": 75,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 49,
                  "end": 75,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 59,
                      "end": 69,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 59,
                        "end": 60,
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
                        "start": 60,
                        "end": 68,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 62,
                          "end": 68
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
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
  "end": 232,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
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
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 164,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 63,
        "end": 164,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 69,
            "end": 162,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 76,
              "end": 162,
              "body": {
                "type": "TSModuleBlock",
                "start": 91,
                "end": 162,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 101,
                    "end": 156,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 108,
                      "end": 156,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 122,
                        "end": 156,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 136,
                            "end": 146,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 136,
                              "end": 140,
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 140,
                              "end": 145,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 142,
                                "end": 145,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 142,
                                  "end": 145,
                                  "decorators": [],
                                  "name": "Foo",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 121,
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
                "start": 86,
                "end": 90,
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
      "start": 166,
      "end": 195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 194,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 194,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 194,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 183,
                "end": 194,
                "typeArguments": null,
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
                      "decorators": [],
                      "name": "ns",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 190,
                      "decorators": [],
                      "name": "Root",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 194,
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
      "type": "ExpressionStatement",
      "start": 197,
      "end": 201,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 197,
        "end": 200,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 197,
          "end": 198,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 199,
          "end": 200,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 209,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 202,
        "end": 208,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 202,
          "end": 203,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 204,
          "end": 208,
          "decorators": [],
          "name": "self",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 210,
      "end": 219,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 210,
        "end": 218,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 210,
          "end": 216,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 212,
            "end": 216,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 217,
          "end": 218,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 220,
      "end": 232,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 220,
        "end": 231,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 220,
          "end": 226,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 222,
            "end": 226,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 227,
          "end": 231,
          "decorators": [],
          "name": "self",
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
