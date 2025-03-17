__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 285,
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
      "end": 254,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 112,
        "end": 254,
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
          "end": 254,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 128,
              "end": 252,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 135,
                "end": 252,
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
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "moduleReference": {
                        "type": "TSQualifiedName",
                        "start": 166,
                        "end": 169,
                        "left": {
                          "type": "Identifier",
                          "start": 166,
                          "end": 167,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 169,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "importKind": "value"
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 179,
                      "end": 206,
                      "declaration": {
                        "type": "VariableDeclaration",
                        "start": 186,
                        "end": 206,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 190,
                            "end": 205,
                            "id": {
                              "type": "Identifier",
                              "start": 190,
                              "end": 195,
                              "name": "cProp",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "NewExpression",
                              "start": 198,
                              "end": 205,
                              "callee": {
                                "type": "Identifier",
                                "start": 202,
                                "end": 203,
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
                      "start": 215,
                      "end": 246,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 219,
                          "end": 245,
                          "id": {
                            "type": "Identifier",
                            "start": 219,
                            "end": 229,
                            "name": "cReturnVal",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "CallExpression",
                            "start": 232,
                            "end": 245,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 232,
                              "end": 241,
                              "object": {
                                "type": "Identifier",
                                "start": 232,
                                "end": 237,
                                "name": "cProp",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 238,
                                "end": 241,
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
                                "start": 242,
                                "end": 244,
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
      "start": 256,
      "end": 285,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 263,
        "end": 285,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 267,
            "end": 284,
            "id": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 271,
              "end": 284,
              "callee": {
                "type": "MemberExpression",
                "start": 275,
                "end": 282,
                "object": {
                  "type": "MemberExpression",
                  "start": 275,
                  "end": 280,
                  "object": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 277,
                    "name": "m2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 278,
                    "end": 280,
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
                  "start": 281,
                  "end": 282,
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
