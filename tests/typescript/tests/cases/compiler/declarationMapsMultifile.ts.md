__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 16
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "doThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 30
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 35,
                              "end": 36
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 38,
                                "end": 44
                              },
                              "start": 36,
                              "end": 44
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 35,
                            "end": 44
                          }
                        ],
                        "start": 34,
                        "end": 45
                      },
                      "start": 32,
                      "end": 45
                    },
                    "start": 31,
                    "end": 45
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 65,
                              "end": 66
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 68,
                                "end": 69
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 70,
                                "end": 71
                              },
                              "optional": false,
                              "computed": false,
                              "start": 68,
                              "end": 71
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 65,
                            "end": 71
                          }
                        ],
                        "start": 64,
                        "end": 72
                      },
                      "start": 57,
                      "end": 73
                    }
                  ],
                  "start": 47,
                  "end": 79
                },
                "expression": false,
                "start": 30,
                "end": 79
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 23,
              "end": 79
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "make",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 95
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 119,
                          "end": 122
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 115,
                        "end": 124
                      },
                      "start": 108,
                      "end": 125
                    }
                  ],
                  "start": 98,
                  "end": 131
                },
                "expression": false,
                "start": 95,
                "end": 131
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 84,
              "end": 131
            }
          ],
          "start": 17,
          "end": 133
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 133
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 133
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 133
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 11
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 11
          },
          "importKind": "value",
          "start": 8,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 18,
        "end": 23
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 24
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 33
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 43
            },
            "typeArguments": null,
            "arguments": [],
            "start": 36,
            "end": 45
          },
          "definite": false,
          "start": 32,
          "end": 45
        }
      ],
      "declare": false,
      "start": 26,
      "end": 46
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doThing",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 56
          },
          "optional": false,
          "computed": false,
          "start": 47,
          "end": 56
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 59
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 61,
                  "end": 63
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 58,
                "end": 63
              }
            ],
            "start": 57,
            "end": 64
          }
        ],
        "optional": false,
        "start": 47,
        "end": 65
      },
      "directive": null,
      "start": 47,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 84
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "doThing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 92
                },
                "optional": false,
                "computed": false,
                "start": 83,
                "end": 92
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 94,
                        "end": 95
                      },
                      "value": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 97,
                        "end": 99
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 94,
                      "end": 99
                    }
                  ],
                  "start": 93,
                  "end": 100
                }
              ],
              "optional": false,
              "start": 83,
              "end": 101
            },
            "definite": false,
            "start": 79,
            "end": 101
          }
        ],
        "declare": false,
        "start": 75,
        "end": 102
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 68,
      "end": 102
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 113
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 113
          },
          "exportKind": "value",
          "start": 112,
          "end": 113
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 118
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 118
          },
          "exportKind": "value",
          "start": 115,
          "end": 118
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 103,
      "end": 121
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 121
}
```
