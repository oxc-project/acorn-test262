__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 162,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 69,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 69,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 68,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 19,
              "end": 68,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 20,
                  "end": 58,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 22,
                      "end": 29,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 22,
                        "end": 26,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 28,
                        "end": 29,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 31,
                      "end": 38,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 31,
                        "end": 35,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 37,
                        "end": 38,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 40,
                    "end": 58,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 42,
                      "end": 58,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 44,
                          "end": 56,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 44,
                            "end": 48,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 48,
                            "end": 56,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 50,
                              "end": 56
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "start": 63,
                "end": 68,
                "left": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "id": null,
              "generator": false
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 71,
      "end": 162,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 78,
        "end": 162,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 84,
            "end": 161,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 87,
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 90,
              "end": 161,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 91,
                  "end": 120,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 93,
                      "end": 100,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 97,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 100,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 102,
                    "end": 120,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 104,
                      "end": 120,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 106,
                          "end": 118,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 106,
                            "end": 110,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 110,
                            "end": 118,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 112,
                              "end": 118
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ObjectPattern",
                  "start": 122,
                  "end": 151,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 124,
                      "end": 131,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 128,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 131,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 133,
                    "end": 151,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 135,
                      "end": 151,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 137,
                          "end": 149,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 137,
                            "end": 141,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 141,
                            "end": 149,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 143,
                              "end": 149
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "start": 156,
                "end": 161,
                "left": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 157,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "id": null,
              "generator": false
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
