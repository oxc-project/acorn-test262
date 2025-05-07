__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 79,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 79,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 77,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 22,
              "end": 77,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 77,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 49,
                    "end": 71,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 56,
                      "end": 70,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 58,
                          "end": 62,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 58,
                            "end": 59,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 61,
                            "end": 62,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 64,
                          "end": 68,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 64,
                            "end": 65,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 67,
                            "end": 68,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 36,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": null,
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
  "end": 89,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 88,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 88,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 86,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 22,
              "end": 86,
              "body": {
                "type": "TSModuleBlock",
                "start": 35,
                "end": 86,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 45,
                    "end": 80,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 52,
                      "end": 80,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 56,
                          "end": 79,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 56,
                            "end": 62,
                            "decorators": [],
                            "name": "Origin",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "ObjectExpression",
                            "start": 65,
                            "end": 79,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 67,
                                "end": 71,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 67,
                                  "end": 68,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "start": 70,
                                  "end": 71,
                                  "raw": "0",
                                  "value": 0,
                                  "regex": null,
                                  "bigint": null
                                }
                              },
                              {
                                "type": "Property",
                                "start": 73,
                                "end": 77,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 73,
                                  "end": 74,
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "start": 76,
                                  "end": 77,
                                  "raw": "0",
                                  "value": 0,
                                  "regex": null,
                                  "bigint": null
                                }
                              }
                            ]
                          }
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
                "start": 29,
                "end": 34,
                "decorators": [],
                "name": "Point",
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
  "end": 117,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 38,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 38,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 8,
                "end": 38,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 11,
                  "end": 38,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 14,
                    "end": 38,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 16,
                        "end": 26,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 16,
                          "end": 17,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 17,
                          "end": 25,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 19,
                            "end": 25
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 27,
                        "end": 36,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 27,
                          "end": 28,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 28,
                          "end": 36,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 30,
                            "end": 36
                          }
                        }
                      }
                    ]
                  }
                },
                "typeParameters": null
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
      "start": 40,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 46,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 49,
            "end": 56,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 51,
              "end": 56,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 92,
            "decorators": [],
            "name": "cl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 67,
                "end": 92,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 69,
                    "end": 79,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 70,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 72,
                        "end": 78
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 80,
                    "end": 90,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 81,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 81,
                      "end": 89,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 83,
                        "end": 89
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
      "start": 93,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 116,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 99,
            "decorators": [],
            "name": "cl",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 102,
            "end": 116,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 102,
              "end": 109,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 104,
                "end": 109,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 110,
              "end": 116,
              "decorators": [],
              "name": "Origin",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
