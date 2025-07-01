__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "TopLevelSym",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 17
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 26
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 20,
            "end": 28
          },
          "definite": false,
          "start": 6,
          "end": 28
        }
      ],
      "declare": false,
      "start": 0,
      "end": 29
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
            "name": "InnerSym",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 44
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 53
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 47,
            "end": 55
          },
          "definite": false,
          "start": 36,
          "end": 55
        }
      ],
      "declare": false,
      "start": 30,
      "end": 56
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 63
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 71
          },
          "optional": false,
          "computed": false,
          "start": 57,
          "end": 71
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "TopLevelSym",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 92
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
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 94,
                      "end": 95
                    },
                    "right": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 98,
                      "end": 100
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 100
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 119,
                        "end": 120
                      },
                      "start": 112,
                      "end": 121
                    }
                  ],
                  "start": 102,
                  "end": 127
                },
                "expression": false,
                "start": 93,
                "end": 127
              },
              "method": true,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 80,
              "end": 127
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "items",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 138
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InnerSym",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 159
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 163,
                            "end": 166
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 170,
                                  "end": 171
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 12,
                                  "raw": "12",
                                  "start": 173,
                                  "end": 175
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 170,
                                "end": 175
                              }
                            ],
                            "start": 169,
                            "end": 176
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 163,
                          "end": 176
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 181,
                          "end": 184
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 185,
                          "end": 186
                        },
                        "optional": false,
                        "computed": false,
                        "start": 181,
                        "end": 186
                      },
                      "id": null,
                      "generator": false,
                      "start": 162,
                      "end": 186
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 150,
                    "end": 186
                  }
                ],
                "start": 140,
                "end": 192
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 133,
              "end": 192
            }
          ],
          "start": 74,
          "end": 194
        },
        "start": 57,
        "end": 194
      },
      "directive": null,
      "start": 57,
      "end": 194
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 195
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "TopLevelSym",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 17
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 26
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 20,
            "end": 28
          },
          "definite": false,
          "start": 6,
          "end": 28
        }
      ],
      "declare": false,
      "start": 0,
      "end": 29
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
            "name": "InnerSym",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 44
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 53
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 47,
            "end": 55
          },
          "definite": false,
          "start": 36,
          "end": 55
        }
      ],
      "declare": false,
      "start": 30,
      "end": 56
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 78
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "TopLevelSym",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 104
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 108,
                "end": 110
              },
              "computed": true,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 85,
              "end": 111
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "InnerSym",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 125
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": "ok",
                "raw": "\"ok\"",
                "start": 129,
                "end": 133
              },
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 116,
              "end": 134
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 222
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
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 225
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InnerSym",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 228,
                      "end": 236
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 223,
                    "end": 236
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 238,
                  "end": 269
                },
                "expression": false,
                "start": 222,
                "end": 269
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 211,
              "end": 269
            }
          ],
          "start": 79,
          "end": 271
        },
        "abstract": false,
        "declare": false,
        "start": 65,
        "end": 271
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 58,
      "end": 271
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 271
}
```
