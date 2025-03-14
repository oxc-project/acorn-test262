A.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 225,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 171,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 26,
              "end": 171,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 69,
                          "end": 94,
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "start": 69,
                            "end": 80,
                            "raw": "\"Version: \"",
                            "value": "Version: "
                          },
                          "right": {
                            "type": "MemberExpression",
                            "start": 83,
                            "end": 94,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 83,
                              "end": 86,
                              "decorators": [],
                              "name": "sys",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 87,
                              "end": 94,
                              "decorators": [],
                              "name": "version",
                              "optional": false
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 65,
                        "end": 68,
                        "decorators": [],
                        "name": "log",
                        "optional": false
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 35,
                "end": 47,
                "decorators": [],
                "name": "printVersion",
                "optional": false
              },
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
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 177,
            "end": 223,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 184,
              "end": 223,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 215,
                "end": 223,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 193,
                "end": 196,
                "decorators": [],
                "name": "log",
                "optional": false
              },
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
              }
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
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "ts",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "module"
}
```
B.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 76,
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 76,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 73,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 27,
              "end": 73,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 31,
                  "end": 72,
                  "definite": false,
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
                            "key": {
                              "type": "Identifier",
                              "start": 36,
                              "end": 43,
                              "decorators": [],
                              "name": "version",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 43,
                              "end": 50,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 44,
                                "end": 50
                              }
                            }
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
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 62,
                          "decorators": [],
                          "name": "version",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 64,
                          "end": 71,
                          "raw": "\"2.0.5\"",
                          "value": "2.0.5"
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "let"
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
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "ts",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "module"
}
```
