__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 292,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 103,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 103,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 103,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 101,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 29,
                "end": 101,
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 37,
                  "end": 101,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 47,
                      "end": 95,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 47,
                        "end": 50,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 50,
                        "end": 95,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 51,
                            "end": 60,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 52,
                              "end": 60,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 54,
                                "end": 60
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    }
                  ]
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 105,
      "end": 261,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 112,
        "end": 261,
        "id": {
          "type": "Identifier",
          "start": 119,
          "end": 121,
          "name": "m2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 122,
          "end": 261,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 128,
              "end": 259,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 135,
                "end": 259,
                "id": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 144,
                  "name": "m3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 145,
                  "end": 259,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 155,
                      "end": 177,
                      "declaration": {
                        "type": "TSImportEqualsDeclaration",
                        "start": 162,
                        "end": 177,
                        "id": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 170,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "moduleReference": {
                          "type": "TSQualifiedName",
                          "start": 173,
                          "end": 176,
                          "left": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 174,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 175,
                            "end": 176,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "importKind": "value"
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "value"
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 186,
                      "end": 213,
                      "declaration": {
                        "type": "VariableDeclaration",
                        "start": 193,
                        "end": 213,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 197,
                            "end": 212,
                            "id": {
                              "type": "Identifier",
                              "start": 197,
                              "end": 202,
                              "name": "cProp",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "NewExpression",
                              "start": 205,
                              "end": 212,
                              "callee": {
                                "type": "Identifier",
                                "start": 209,
                                "end": 210,
                                "name": "c",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
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
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 222,
                      "end": 253,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 226,
                          "end": 252,
                          "id": {
                            "type": "Identifier",
                            "start": 226,
                            "end": 236,
                            "name": "cReturnVal",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "CallExpression",
                            "start": 239,
                            "end": 252,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 239,
                              "end": 248,
                              "object": {
                                "type": "Identifier",
                                "start": 239,
                                "end": 244,
                                "name": "cProp",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 245,
                                "end": 248,
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 249,
                                "end": 251,
                                "value": 10,
                                "raw": "10"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    }
                  ]
                },
                "kind": "module",
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
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 263,
      "end": 292,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 270,
        "end": 292,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 274,
            "end": 291,
            "id": {
              "type": "Identifier",
              "start": 274,
              "end": 275,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 278,
              "end": 291,
              "callee": {
                "type": "MemberExpression",
                "start": 282,
                "end": 289,
                "object": {
                  "type": "MemberExpression",
                  "start": 282,
                  "end": 287,
                  "object": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 284,
                    "name": "m2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 287,
                    "name": "m3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 289,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
