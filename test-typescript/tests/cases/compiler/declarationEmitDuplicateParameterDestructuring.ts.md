__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 163,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 69,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 69,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 68,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "name": "fn1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 19,
              "end": 68,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 20,
                  "end": 58,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 22,
                      "end": 29,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 22,
                        "end": 26,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 28,
                        "end": 29,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 31,
                      "end": 38,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 31,
                        "end": 35,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 37,
                        "end": 38,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
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
                            "name": "prop",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
              "body": {
                "type": "BinaryExpression",
                "start": 63,
                "end": 68,
                "left": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 71,
      "end": 162,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 78,
        "end": 162,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 84,
            "end": 161,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 87,
              "name": "fn2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 90,
              "end": 161,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 91,
                  "end": 120,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 93,
                      "end": 100,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 97,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 100,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
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
                            "name": "prop",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  "properties": [
                    {
                      "type": "Property",
                      "start": 124,
                      "end": 131,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 128,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 131,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
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
                            "name": "prop",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
              "body": {
                "type": "BinaryExpression",
                "start": 156,
                "end": 161,
                "left": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 157,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
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
