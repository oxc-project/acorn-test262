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
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 19
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "_sym",
                "raw": "\"_sym\"",
                "start": 20,
                "end": 26
              }
            ],
            "optional": false,
            "start": 13,
            "end": 27
          },
          "definite": false,
          "start": 6,
          "end": 27
        }
      ],
      "declare": false,
      "start": 0,
      "end": 28
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
          "start": 42,
          "end": 49
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
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 67
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 80,
                            "end": 84
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_sym",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 85,
                            "end": 89
                          },
                          "optional": false,
                          "computed": true,
                          "start": 80,
                          "end": 90
                        },
                        "right": {
                          "type": "Literal",
                          "value": "ok",
                          "raw": "\"ok\"",
                          "start": 93,
                          "end": 97
                        },
                        "start": 80,
                        "end": 97
                      },
                      "directive": null,
                      "start": 80,
                      "end": 98
                    }
                  ],
                  "start": 70,
                  "end": 104
                },
                "expression": false,
                "start": 67,
                "end": 104
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 56,
              "end": 104
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 116
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 129,
                            "end": 133
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_sym",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 134,
                            "end": 138
                          },
                          "optional": false,
                          "computed": true,
                          "start": 129,
                          "end": 139
                        },
                        "right": {
                          "type": "Literal",
                          "value": "yep",
                          "raw": "\"yep\"",
                          "start": 142,
                          "end": 147
                        },
                        "start": 129,
                        "end": 147
                      },
                      "directive": null,
                      "start": 129,
                      "end": 148
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 163,
                            "end": 164
                          },
                          "init": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 167,
                              "end": 171
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_sym",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 172,
                              "end": 176
                            },
                            "optional": false,
                            "computed": true,
                            "start": 167,
                            "end": 177
                          },
                          "definite": false,
                          "start": 163,
                          "end": 177
                        }
                      ],
                      "declare": false,
                      "start": 157,
                      "end": 178
                    }
                  ],
                  "start": 119,
                  "end": 184
                },
                "expression": false,
                "start": 116,
                "end": 184
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 110,
              "end": 184
            }
          ],
          "start": 50,
          "end": 186
        },
        "abstract": false,
        "declare": false,
        "start": 36,
        "end": 186
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 29,
      "end": 186
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 186
}
```
