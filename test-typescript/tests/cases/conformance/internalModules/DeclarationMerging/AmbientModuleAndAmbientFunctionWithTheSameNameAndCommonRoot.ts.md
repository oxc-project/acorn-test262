module.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 73,
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 73,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 71,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 34,
              "end": 71,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 38,
                  "end": 71,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 71,
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 44,
                      "end": 71,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 46,
                        "end": 71,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 48,
                            "end": 58,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 48,
                              "end": 49,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 49,
                              "end": 57,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 51,
                                "end": 57
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 59,
                            "end": 69,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 59,
                              "end": 60,
                              "decorators": [],
                              "name": "y",
                              "optional": false
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
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
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
        "type": "Identifier",
        "start": 15,
        "end": 20,
        "decorators": [],
        "name": "Point",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module"
}
```
function.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 51,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "Point",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 24,
        "end": 51,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 26,
          "end": 51,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 28,
              "end": 38,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 29,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 31,
                  "end": 37
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 39,
              "end": 49,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 40,
                "end": 48,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 42,
                  "end": 48
                }
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "module"
}
```
test.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 33,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 33,
            "decorators": [],
            "name": "cl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 8,
                "end": 33,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 10,
                    "end": 20,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 10,
                      "end": 11,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 11,
                      "end": 19,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 13,
                        "end": 19
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 21,
                    "end": 31,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 21,
                      "end": 22,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 22,
                      "end": 30,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 24,
                        "end": 30
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 40,
            "decorators": [],
            "name": "cl",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 43,
            "end": 50,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 43,
              "end": 48,
              "decorators": [],
              "name": "Point",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 58,
            "decorators": [],
            "name": "cl",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 61,
            "end": 73,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 61,
              "end": 66,
              "decorators": [],
              "name": "Point",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 67,
              "end": 73,
              "decorators": [],
              "name": "Origin",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
