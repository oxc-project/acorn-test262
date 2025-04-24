__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "decorators": [],
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 27,
            "arguments": [
              {
                "type": "Literal",
                "start": 20,
                "end": 26,
                "raw": "\"_sym\"",
                "value": "_sym"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 13,
              "end": 19,
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
      "start": 29,
      "end": 186,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 36,
        "end": 186,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 50,
          "end": 186,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 56,
              "end": 104,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 56,
                "end": 67,
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
                "start": 67,
                "end": 104,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 70,
                  "end": 104,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 80,
                      "end": 98,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 80,
                        "end": 97,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 80,
                          "end": 90,
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "start": 80,
                            "end": 84
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 85,
                            "end": 89,
                            "decorators": [],
                            "name": "_sym",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 93,
                          "end": 97,
                          "raw": "\"ok\"",
                          "value": "ok"
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
              "start": 110,
              "end": 184,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 110,
                "end": 116,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 116,
                "end": 184,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 119,
                  "end": 184,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 129,
                      "end": 148,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 129,
                        "end": 147,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 129,
                          "end": 139,
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "start": 129,
                            "end": 133
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 138,
                            "decorators": [],
                            "name": "_sym",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 142,
                          "end": 147,
                          "raw": "\"yep\"",
                          "value": "yep"
                        }
                      }
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 157,
                      "end": 178,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 163,
                          "end": 177,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 163,
                            "end": 164,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "MemberExpression",
                            "start": 167,
                            "end": 177,
                            "computed": true,
                            "object": {
                              "type": "ThisExpression",
                              "start": 167,
                              "end": 171
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 172,
                              "end": 176,
                              "decorators": [],
                              "name": "_sym",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const"
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
          "start": 42,
          "end": 49,
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
