__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 237,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 32,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 32,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 30,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 30,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 30,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 21,
                "end": 27,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 23,
                  "end": 27
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 208,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 208,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 62,
            "end": 72,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 65,
                "end": 71,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 71,
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 136,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 89,
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
              "start": 89,
              "end": 136,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 136,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 110,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 102,
                      "end": 109,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 102,
                        "end": 107
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 130,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 119,
                      "end": 129,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 119,
                        "end": 125,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 119,
                          "end": 123
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 124,
                          "end": 125,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 128,
                        "end": 129,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 206,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 145,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 145,
              "end": 206,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 148,
                "end": 206,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 158,
                    "end": 170,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 158,
                      "end": 169,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 158,
                        "end": 167,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 158,
                          "end": 163
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 167,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 179,
                    "end": 200,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 179,
                      "end": 199,
                      "arguments": [],
                      "callee": {
                        "type": "TSAsExpression",
                        "start": 180,
                        "end": 196,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 180,
                          "end": 189,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 180,
                            "end": 185
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 186,
                            "end": 189,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 193,
                          "end": 196
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 40,
        "end": 43,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 52,
        "end": 55,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 228,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 216,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 219,
            "end": 228,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 223,
              "end": 226,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 230,
      "end": 237,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 230,
        "end": 237,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 230,
          "end": 235,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 230,
            "end": 231,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 232,
            "end": 235,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
