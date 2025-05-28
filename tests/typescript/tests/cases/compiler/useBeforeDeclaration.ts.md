__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 226,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "ts",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 225,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 171,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 26,
              "end": 171,
              "id": {
                "type": "Identifier",
                "start": 35,
                "end": 47,
                "decorators": [],
                "name": "printVersion",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 49,
                "end": 54,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 50,
                  "end": 54
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 55,
                "end": 171,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 65,
                    "end": 96,
                    "expression": {
                      "type": "CallExpression",
                      "start": 65,
                      "end": 95,
                      "callee": {
                        "type": "Identifier",
                        "start": 65,
                        "end": 68,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 69,
                          "end": 94,
                          "left": {
                            "type": "Literal",
                            "start": 69,
                            "end": 80,
                            "value": "Version: ",
                            "raw": "\"Version: \""
                          },
                          "operator": "+",
                          "right": {
                            "type": "MemberExpression",
                            "start": 83,
                            "end": 94,
                            "object": {
                              "type": "Identifier",
                              "start": 83,
                              "end": 86,
                              "decorators": [],
                              "name": "sys",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 87,
                              "end": 94,
                              "decorators": [],
                              "name": "version",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 177,
            "end": 223,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 184,
              "end": 223,
              "id": {
                "type": "Identifier",
                "start": 193,
                "end": 196,
                "decorators": [],
                "name": "log",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 197,
                  "end": 208,
                  "decorators": [],
                  "name": "info",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 201,
                    "end": 208,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 202,
                      "end": 208
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 209,
                "end": 214,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 210,
                  "end": 214
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 215,
                "end": 223,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
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
  "end": 77,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "ts",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 76,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 73,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 27,
              "end": 73,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 31,
                  "end": 72,
                  "id": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 51,
                    "decorators": [],
                    "name": "sys",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 34,
                      "end": 51,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 35,
                        "end": 51,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 36,
                            "end": 50,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 36,
                              "end": 43,
                              "decorators": [],
                              "name": "version",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 43,
                              "end": 50,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 44,
                                "end": 50
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 54,
                    "end": 72,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 55,
                        "end": 71,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 62,
                          "decorators": [],
                          "name": "version",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 64,
                          "end": 71,
                          "value": "2.0.5",
                          "raw": "\"2.0.5\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
