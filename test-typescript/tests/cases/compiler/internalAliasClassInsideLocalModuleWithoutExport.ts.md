__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 254,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 103,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 103,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 103,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 101,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 29,
                "end": 101,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 37,
                  "end": 101,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 47,
                      "end": 95,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 47,
                        "end": 50,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 50,
                        "end": 95,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 62,
                          "end": 95,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 76,
                              "end": 85,
                              "argument": {
                                "type": "Identifier",
                                "start": 83,
                                "end": 84,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 51,
                            "end": 60,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 52,
                              "end": 60,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 54,
                                "end": 60
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
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
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 105,
      "end": 254,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 112,
        "end": 254,
        "body": {
          "type": "TSModuleBlock",
          "start": 122,
          "end": 254,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 128,
              "end": 252,
              "attributes": [],
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 135,
                "end": 252,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 145,
                  "end": 252,
                  "body": [
                    {
                      "type": "TSImportEqualsDeclaration",
                      "start": 155,
                      "end": 170,
                      "id": {
                        "type": "Identifier",
                        "start": 162,
                        "end": 163,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "importKind": "value",
                      "moduleReference": {
                        "type": "TSQualifiedName",
                        "start": 166,
                        "end": 169,
                        "left": {
                          "type": "Identifier",
                          "start": 166,
                          "end": 167,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 169,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 179,
                      "end": 206,
                      "attributes": [],
                      "declaration": {
                        "type": "VariableDeclaration",
                        "start": 186,
                        "end": 206,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 190,
                            "end": 205,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 190,
                              "end": 195,
                              "decorators": [],
                              "name": "cProp",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "NewExpression",
                              "start": 198,
                              "end": 205,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 202,
                                "end": 203,
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      },
                      "exportKind": "value",
                      "source": null,
                      "specifiers": []
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 215,
                      "end": 246,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 219,
                          "end": 245,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 219,
                            "end": 229,
                            "decorators": [],
                            "name": "cReturnVal",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "CallExpression",
                            "start": 232,
                            "end": 245,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 242,
                                "end": 244,
                                "raw": "10",
                                "value": 10
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 232,
                              "end": 241,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 232,
                                "end": 237,
                                "decorators": [],
                                "name": "cProp",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 238,
                                "end": 241,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    }
                  ]
                },
                "declare": false,
                "global": false,
                "id": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 144,
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "module"
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
          "start": 119,
          "end": 121,
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
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
