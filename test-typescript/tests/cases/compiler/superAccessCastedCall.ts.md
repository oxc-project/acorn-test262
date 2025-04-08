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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 32,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 30,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 30,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 30,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 21,
                "end": 27,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 23,
                  "end": 27
                }
              }
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
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 52,
        "end": 55,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 208,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 62,
            "end": 72,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 65,
                "end": 71,
                "typeName": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 71,
                  "name": "Number",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 136,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 89,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 136,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 136,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 110,
                    "expression": {
                      "type": "CallExpression",
                      "start": 102,
                      "end": 109,
                      "callee": {
                        "type": "Super",
                        "start": 102,
                        "end": 107
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 130,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 119,
                      "end": 129,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 119,
                        "end": 125,
                        "object": {
                          "type": "ThisExpression",
                          "start": 119,
                          "end": 123
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 124,
                          "end": 125,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 128,
                        "end": 129,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
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
            "start": 142,
            "end": 206,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 145,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 145,
              "end": 206,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 148,
                "end": 206,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 158,
                    "end": 170,
                    "expression": {
                      "type": "CallExpression",
                      "start": 158,
                      "end": 169,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 158,
                        "end": 167,
                        "object": {
                          "type": "Super",
                          "start": 158,
                          "end": 163
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 167,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 179,
                    "end": 200,
                    "expression": {
                      "type": "CallExpression",
                      "start": 179,
                      "end": 199,
                      "callee": {
                        "type": "TSAsExpression",
                        "start": 180,
                        "end": 196,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 180,
                          "end": 189,
                          "object": {
                            "type": "Super",
                            "start": 180,
                            "end": 185
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 186,
                            "end": 189,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 193,
                          "end": 196
                        }
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 228,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 216,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 219,
            "end": 228,
            "callee": {
              "type": "Identifier",
              "start": 223,
              "end": 226,
              "name": "Bar",
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 230,
      "end": 237,
      "expression": {
        "type": "CallExpression",
        "start": 230,
        "end": 237,
        "callee": {
          "type": "MemberExpression",
          "start": 230,
          "end": 235,
          "object": {
            "type": "Identifier",
            "start": 230,
            "end": 231,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 232,
            "end": 235,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
