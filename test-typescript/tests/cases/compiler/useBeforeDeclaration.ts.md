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
        "name": "ts",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "printVersion",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                              "name": "sys",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 87,
                              "end": 94,
                              "name": "version",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
                "name": "log",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 197,
                  "end": 208,
                  "name": "info",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 201,
                    "end": 208,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 202,
                      "end": 208
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 215,
                "end": 223,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
  "end": 78,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "ts",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 31,
                  "end": 72,
                  "id": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 51,
                    "name": "sys",
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
                              "name": "version",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                    },
                    "decorators": [],
                    "optional": false
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 62,
                          "name": "version",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 64,
                          "end": 71,
                          "value": "2.0.5",
                          "raw": "\"2.0.5\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
