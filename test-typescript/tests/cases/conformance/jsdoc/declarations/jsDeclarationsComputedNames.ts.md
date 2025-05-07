__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 195,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 17,
            "decorators": [],
            "name": "TopLevelSym",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 20,
            "end": 28,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 20,
              "end": 26,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 44,
            "decorators": [],
            "name": "InnerSym",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 47,
            "end": 55,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 47,
              "end": 53,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 194,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 57,
        "end": 194,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 57,
          "end": 71,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 57,
            "end": 63,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 71,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 74,
          "end": 194,
          "properties": [
            {
              "type": "Property",
              "start": 80,
              "end": 127,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 81,
                "end": 92,
                "decorators": [],
                "name": "TopLevelSym",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 93,
                "end": 127,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 102,
                  "end": 127,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 112,
                      "end": 121,
                      "argument": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 120,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
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
                    "type": "AssignmentPattern",
                    "start": 94,
                    "end": 100,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 98,
                      "end": 100,
                      "raw": "12",
                      "value": 12,
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "Property",
              "start": 133,
              "end": 192,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 133,
                "end": 138,
                "decorators": [],
                "name": "items",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ObjectExpression",
                "start": 140,
                "end": 192,
                "properties": [
                  {
                    "type": "Property",
                    "start": 150,
                    "end": 186,
                    "computed": true,
                    "key": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 159,
                      "decorators": [],
                      "name": "InnerSym",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 162,
                      "end": 186,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 181,
                        "end": 186,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 184,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 185,
                          "end": 186,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "AssignmentPattern",
                          "start": 163,
                          "end": 176,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 163,
                            "end": 166,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "right": {
                            "type": "ObjectExpression",
                            "start": 169,
                            "end": 176,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 170,
                                "end": 175,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 170,
                                  "end": 171,
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
                                  "start": 173,
                                  "end": 175,
                                  "raw": "12",
                                  "value": 12,
                                  "regex": null,
                                  "bigint": null
                                }
                              }
                            ]
                          },
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              }
            }
          ]
        }
      }
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
  "end": 271,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 17,
            "decorators": [],
            "name": "TopLevelSym",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 20,
            "end": 28,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 20,
              "end": 26,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 44,
            "decorators": [],
            "name": "InnerSym",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 47,
            "end": 55,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 47,
              "end": 53,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 58,
      "end": 271,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 65,
        "end": 271,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 79,
          "end": 271,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 85,
              "end": 111,
              "accessibility": null,
              "computed": true,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 93,
                "end": 104,
                "decorators": [],
                "name": "TopLevelSym",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 108,
                "end": 110,
                "raw": "12",
                "value": 12,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 116,
              "end": 134,
              "accessibility": null,
              "computed": true,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 117,
                "end": 125,
                "decorators": [],
                "name": "InnerSym",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 129,
                "end": 133,
                "raw": "\"ok\"",
                "value": "ok",
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 211,
              "end": 269,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 211,
                "end": 222,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 222,
                "end": 269,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 238,
                  "end": 269,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 223,
                    "end": 236,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 225,
                      "decorators": [],
                      "name": "_p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 236,
                      "decorators": [],
                      "name": "InnerSym",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 71,
          "end": 78,
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
