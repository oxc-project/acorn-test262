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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 28,
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
            "callee": {
              "type": "Identifier",
              "start": 20,
              "end": 26,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 56,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 55,
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
            "callee": {
              "type": "Identifier",
              "start": 47,
              "end": 53,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 194,
      "expression": {
        "type": "AssignmentExpression",
        "start": 57,
        "end": 194,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 57,
          "end": 71,
          "object": {
            "type": "Identifier",
            "start": 57,
            "end": 63,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 71,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 81,
                "end": 92,
                "decorators": [],
                "name": "TopLevelSym",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 93,
                "end": 127,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                    "right": {
                      "type": "Literal",
                      "start": 98,
                      "end": 100,
                      "value": 12,
                      "raw": "12"
                    },
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
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
                "expression": false
              },
              "method": true,
              "shorthand": false,
              "computed": true,
              "optional": false
            },
            {
              "type": "Property",
              "start": 133,
              "end": 192,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 133,
                "end": 138,
                "decorators": [],
                "name": "items",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ObjectExpression",
                "start": 140,
                "end": 192,
                "properties": [
                  {
                    "type": "Property",
                    "start": 150,
                    "end": 186,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 159,
                      "decorators": [],
                      "name": "InnerSym",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 162,
                      "end": 186,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
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
                          "right": {
                            "type": "ObjectExpression",
                            "start": 169,
                            "end": 176,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 170,
                                "end": 175,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 170,
                                  "end": 171,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 173,
                                  "end": 175,
                                  "value": 12,
                                  "raw": "12"
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              }
                            ]
                          },
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "start": 181,
                        "end": 186,
                        "object": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 184,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 185,
                          "end": 186,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false
                  }
                ]
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 28,
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
            "callee": {
              "type": "Identifier",
              "start": 20,
              "end": 26,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 56,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 55,
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
            "callee": {
              "type": "Identifier",
              "start": 47,
              "end": 53,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 58,
      "end": 271,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 65,
        "end": 271,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 79,
          "end": 271,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 85,
              "end": 111,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 93,
                "end": 104,
                "decorators": [],
                "name": "TopLevelSym",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 108,
                "end": 110,
                "value": 12,
                "raw": "12"
              },
              "computed": true,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 116,
              "end": 134,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 117,
                "end": 125,
                "decorators": [],
                "name": "InnerSym",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 129,
                "end": 133,
                "value": "ok",
                "raw": "\"ok\""
              },
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 211,
              "end": 269,
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
              "value": {
                "type": "FunctionExpression",
                "start": 222,
                "end": 269,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                    "right": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 236,
                      "decorators": [],
                      "name": "InnerSym",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 238,
                  "end": 269,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
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
