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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 27,
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
            "callee": {
              "type": "Identifier",
              "start": 13,
              "end": 19,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 20,
                "end": 26,
                "value": "_sym",
                "raw": "\"_sym\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 186,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 36,
        "end": 186,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 50,
          "end": 186,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 56,
              "end": 104,
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
              "value": {
                "type": "FunctionExpression",
                "start": 67,
                "end": 104,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 70,
                  "end": 104,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 80,
                      "end": 98,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 80,
                        "end": 97,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 80,
                          "end": 90,
                          "object": {
                            "type": "ThisExpression",
                            "start": 80,
                            "end": 84
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 85,
                            "end": 89,
                            "decorators": [],
                            "name": "_sym",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 93,
                          "end": 97,
                          "value": "ok",
                          "raw": "\"ok\""
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
              "start": 110,
              "end": 184,
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
              "value": {
                "type": "FunctionExpression",
                "start": 116,
                "end": 184,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 119,
                  "end": 184,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 129,
                      "end": 148,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 129,
                        "end": 147,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 129,
                          "end": 139,
                          "object": {
                            "type": "ThisExpression",
                            "start": 129,
                            "end": 133
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 138,
                            "decorators": [],
                            "name": "_sym",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 142,
                          "end": 147,
                          "value": "yep",
                          "raw": "\"yep\""
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 157,
                      "end": 178,
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 163,
                          "end": 177,
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
                            "object": {
                              "type": "ThisExpression",
                              "start": 167,
                              "end": 171
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 172,
                              "end": 176,
                              "decorators": [],
                              "name": "_sym",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": true
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
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
