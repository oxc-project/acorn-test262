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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 32,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 30,
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
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 30,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 30,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
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
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 208,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 208,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 62,
            "end": 72,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
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
            "start": 78,
            "end": 136,
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
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 136,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 206,
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
            "value": {
              "type": "FunctionExpression",
              "start": 145,
              "end": 206,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 193,
                          "end": 196
                        }
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 229,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 228,
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
            "callee": {
              "type": "Identifier",
              "start": 223,
              "end": 226,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 232,
            "end": 235,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
