a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 133,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 133,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 133,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 23,
              "end": 79,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 23,
                "end": 30,
                "decorators": [],
                "name": "doThing",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 30,
                "end": 79,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 47,
                  "end": 79,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 57,
                      "end": 73,
                      "argument": {
                        "type": "ObjectExpression",
                        "start": 64,
                        "end": 72,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 65,
                            "end": 71,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 65,
                              "end": 66,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "start": 68,
                              "end": 71,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 68,
                                "end": 69,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 70,
                                "end": 71,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              }
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
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 31,
                    "end": 45,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 32,
                      "end": 45,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 34,
                        "end": 45,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 35,
                            "end": 44,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 35,
                              "end": 36,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 36,
                              "end": 44,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 38,
                                "end": 44
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 84,
              "end": 131,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 91,
                "end": 95,
                "decorators": [],
                "name": "make",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 95,
                "end": 131,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 98,
                  "end": 131,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 108,
                      "end": 125,
                      "argument": {
                        "type": "NewExpression",
                        "start": 115,
                        "end": 124,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 122,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 36,
            "end": 45,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 40,
              "end": 43,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 66,
      "expression": {
        "type": "CallExpression",
        "start": 47,
        "end": 65,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 57,
            "end": 64,
            "properties": [
              {
                "type": "Property",
                "start": 58,
                "end": 63,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 61,
                  "end": 63,
                  "raw": "42",
                  "value": 42
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 47,
          "end": 56,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 49,
            "end": 56,
            "decorators": [],
            "name": "doThing",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 102,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 75,
        "end": 102,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 79,
            "end": 101,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 83,
              "end": 101,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 93,
                  "end": 100,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 94,
                      "end": 99,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 97,
                        "end": 99,
                        "raw": "12",
                        "value": 12
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 83,
                "end": 92,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 92,
                  "decorators": [],
                  "name": "doThing",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 103,
      "end": 121,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 112,
          "end": 113,
          "exported": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 115,
          "end": 118,
          "exported": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
