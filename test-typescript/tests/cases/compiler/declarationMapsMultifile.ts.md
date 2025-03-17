__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 133,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 133,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 23,
              "end": 79,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 23,
                "end": 30,
                "name": "doThing",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 30,
                "end": 79,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 31,
                    "end": 45,
                    "name": "x",
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
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 35,
                              "end": 36,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 36,
                              "end": 44,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 38,
                                "end": 44
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
                  }
                ],
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 65,
                              "end": 66,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 68,
                              "end": 71,
                              "object": {
                                "type": "Identifier",
                                "start": 68,
                                "end": 69,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 70,
                                "end": 71,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 84,
              "end": 131,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 91,
                "end": 95,
                "name": "make",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 95,
                "end": 131,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 122,
                          "name": "Foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 122,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 36,
            "end": 45,
            "callee": {
              "type": "Identifier",
              "start": 40,
              "end": 43,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 66,
      "expression": {
        "type": "CallExpression",
        "start": 47,
        "end": 65,
        "callee": {
          "type": "MemberExpression",
          "start": 47,
          "end": 56,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 49,
            "end": 56,
            "name": "doThing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 61,
                  "end": 63,
                  "value": 42,
                  "raw": "42"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 102,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 75,
        "end": 102,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 79,
            "end": 101,
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 83,
              "end": 101,
              "callee": {
                "type": "MemberExpression",
                "start": 83,
                "end": 92,
                "object": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 92,
                  "name": "doThing",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 97,
                        "end": 99,
                        "value": 12,
                        "raw": "12"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 103,
      "end": 121,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 112,
          "end": 113,
          "local": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 115,
          "end": 118,
          "local": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
