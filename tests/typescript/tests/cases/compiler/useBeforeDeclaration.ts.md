__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ts",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "printVersion",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 47
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 50,
                  "end": 54
                },
                "start": 49,
                "end": 54
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 65,
                        "end": 68
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": "Version: ",
                            "raw": "\"Version: \"",
                            "start": 69,
                            "end": 80
                          },
                          "operator": "+",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sys",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 83,
                              "end": 86
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "version",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 87,
                              "end": 94
                            },
                            "optional": false,
                            "computed": false,
                            "start": 83,
                            "end": 94
                          },
                          "start": 69,
                          "end": 94
                        }
                      ],
                      "optional": false,
                      "start": 65,
                      "end": 95
                    },
                    "directive": null,
                    "start": 65,
                    "end": 96
                  }
                ],
                "start": 55,
                "end": 171
              },
              "expression": false,
              "start": 26,
              "end": 171
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 171
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "log",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 196
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "info",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 202,
                      "end": 208
                    },
                    "start": 201,
                    "end": 208
                  },
                  "start": 197,
                  "end": 208
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 210,
                  "end": 214
                },
                "start": 209,
                "end": 214
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 215,
                "end": 223
              },
              "expression": false,
              "start": 184,
              "end": 223
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 177,
            "end": 223
          }
        ],
        "start": 13,
        "end": 225
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 225
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 226
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ts",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sys",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "version",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 36,
                              "end": 43
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 44,
                                "end": 50
                              },
                              "start": 43,
                              "end": 50
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 36,
                            "end": 50
                          }
                        ],
                        "start": 35,
                        "end": 51
                      },
                      "start": 34,
                      "end": 51
                    },
                    "start": 31,
                    "end": 51
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "version",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 55,
                          "end": 62
                        },
                        "value": {
                          "type": "Literal",
                          "value": "2.0.5",
                          "raw": "\"2.0.5\"",
                          "start": 64,
                          "end": 71
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 55,
                        "end": 71
                      }
                    ],
                    "start": 54,
                    "end": 72
                  },
                  "definite": false,
                  "start": 31,
                  "end": 72
                }
              ],
              "declare": false,
              "start": 27,
              "end": 73
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 20,
            "end": 73
          }
        ],
        "start": 13,
        "end": 76
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 76
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 77
}
```
