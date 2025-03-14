module.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 137,
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 137,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 23,
            "end": 135,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 30,
              "end": 135,
              "body": {
                "type": "TSModuleBlock",
                "start": 43,
                "end": 135,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 53,
                    "end": 129,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 60,
                      "end": 129,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 64,
                          "end": 129,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 64,
                            "end": 129,
                            "decorators": [],
                            "name": "Origin",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 70,
                              "end": 129,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 72,
                                "end": 129,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 86,
                                    "end": 96,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 86,
                                      "end": 87,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 87,
                                      "end": 95,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 89,
                                        "end": 95
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 109,
                                    "end": 119,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 109,
                                      "end": 110,
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 110,
                                      "end": 118,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 112,
                                        "end": 118
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
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 42,
                "decorators": [],
                "name": "Point",
                "optional": false
              },
              "kind": "module"
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
        "end": 16,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module"
}
```
classPoint.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 103,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 103,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 101,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 101,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 34,
                "end": 101,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 44,
                    "end": 95,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 55,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 55,
                      "end": 95,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 92,
                        "end": 95,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 56,
                          "end": 72,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 63,
                            "end": 72,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 64,
                              "end": 72,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 66,
                                "end": 72
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 74,
                          "end": 90,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 90,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 82,
                              "end": 90,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 84,
                                "end": 90
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 33,
                "decorators": [],
                "name": "Point",
                "optional": false
              },
              "implements": [],
              "superClass": null
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
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
  "end": 120,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 32,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 32,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 32,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 9,
                    "end": 19,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9,
                      "end": 10,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10,
                      "end": 18,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 12,
                        "end": 18
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 20,
                    "end": 30,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 21,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 21,
                      "end": 29,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 23,
                        "end": 29
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
      "start": 33,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 41,
            "end": 55,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 41,
              "end": 48,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 43,
                "end": 48,
                "decorators": [],
                "name": "Point",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 55,
              "decorators": [],
              "name": "Origin",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 65,
            "end": 82,
            "arguments": [
              {
                "type": "Literal",
                "start": 77,
                "end": 78,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 80,
                "end": 81,
                "raw": "0",
                "value": 0
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 69,
              "end": 76,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 71,
                "end": 76,
                "decorators": [],
                "name": "Point",
                "optional": false
              }
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
