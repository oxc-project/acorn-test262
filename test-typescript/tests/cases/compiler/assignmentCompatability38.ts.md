__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 357,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 206,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 16,
        "name": "__test1__",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 206,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 23,
            "end": 96,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 30,
              "end": 96,
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 70,
                "name": "interfaceWithPublicAndOptional",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 70,
                "end": 75,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 71,
                    "end": 72,
                    "name": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 73,
                    "end": 74,
                    "name": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "name": "U",
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
              "body": {
                "type": "TSInterfaceBody",
                "start": 76,
                "end": 96,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 78,
                    "end": 85,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 81,
                      "name": "one",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 81,
                      "end": 84,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 83,
                        "end": 84,
                        "typeName": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 86,
                    "end": 94,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 89,
                      "name": "two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 90,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 92,
                        "end": 93,
                        "typeName": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 93,
                          "name": "U",
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
          },
          {
            "type": "EmptyStatement",
            "start": 96,
            "end": 97
          },
          {
            "type": "VariableDeclaration",
            "start": 99,
            "end": 168,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 103,
                "end": 167,
                "id": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 154,
                  "name": "obj4",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 109,
                      "end": 154,
                      "typeName": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 139,
                        "name": "interfaceWithPublicAndOptional",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 139,
                        "end": 154,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 140,
                            "end": 146
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 147,
                            "end": 153
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 157,
                  "end": 167,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 159,
                      "end": 165,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 162,
                        "name": "one",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 164,
                        "end": 165,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "EmptyStatement",
            "start": 168,
            "end": 169
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 174,
            "end": 204,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 181,
              "end": 204,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 185,
                  "end": 203,
                  "id": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 196,
                    "name": "__val__obj4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 203,
                    "name": "obj4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
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
      "start": 207,
      "end": 313,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 223,
        "name": "__test2__",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 224,
        "end": 313,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 230,
            "end": 279,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 237,
              "end": 279,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 241,
                  "end": 278,
                  "id": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 278,
                    "name": "aa",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 243,
                      "end": 278,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 244,
                        "end": 278,
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "start": 246,
                            "end": 276,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 250,
                              "end": 259,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 251,
                                  "end": 258,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 251,
                                    "end": 258,
                                    "name": "Tstring",
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
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 260,
                                "end": 274,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 265,
                                  "end": 274,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 267,
                                    "end": 274,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 267,
                                      "end": 274,
                                      "name": "Tstring",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": null
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "EmptyStatement",
            "start": 279,
            "end": 280
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 285,
            "end": 311,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 292,
              "end": 311,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 296,
                  "end": 310,
                  "id": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 305,
                    "name": "__val__aa",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 308,
                    "end": 310,
                    "name": "aa",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
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
      "type": "ExpressionStatement",
      "start": 314,
      "end": 357,
      "expression": {
        "type": "AssignmentExpression",
        "start": 314,
        "end": 357,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 314,
          "end": 333,
          "object": {
            "type": "Identifier",
            "start": 314,
            "end": 323,
            "name": "__test2__",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 324,
            "end": 333,
            "name": "__val__aa",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 336,
          "end": 357,
          "object": {
            "type": "Identifier",
            "start": 336,
            "end": 345,
            "name": "__test1__",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 346,
            "end": 357,
            "name": "__val__obj4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
