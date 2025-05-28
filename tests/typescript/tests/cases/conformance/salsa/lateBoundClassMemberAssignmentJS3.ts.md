__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 234,
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
      "end": 234,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 36,
        "end": 234,
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
          "end": 234,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 56,
              "end": 128,
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
                "end": 128,
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
                  "end": 128,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 80,
                      "end": 95,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 84,
                          "end": 95,
                          "id": {
                            "type": "Identifier",
                            "start": 84,
                            "end": 88,
                            "decorators": [],
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "ThisExpression",
                            "start": 91,
                            "end": 95
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 104,
                      "end": 122,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 104,
                        "end": 121,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 104,
                          "end": 114,
                          "object": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 108,
                            "decorators": [],
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 113,
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
                          "start": 117,
                          "end": 121,
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
              "start": 134,
              "end": 232,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 134,
                "end": 140,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 140,
                "end": 232,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 143,
                  "end": 232,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 153,
                      "end": 168,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 157,
                          "end": 168,
                          "id": {
                            "type": "Identifier",
                            "start": 157,
                            "end": 161,
                            "decorators": [],
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "ThisExpression",
                            "start": 164,
                            "end": 168
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 177,
                      "end": 196,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 177,
                        "end": 195,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 177,
                          "end": 187,
                          "object": {
                            "type": "Identifier",
                            "start": 177,
                            "end": 181,
                            "decorators": [],
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 182,
                            "end": 186,
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
                          "start": 190,
                          "end": 195,
                          "value": "yep",
                          "raw": "\"yep\""
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 205,
                      "end": 226,
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 211,
                          "end": 225,
                          "id": {
                            "type": "Identifier",
                            "start": 211,
                            "end": 212,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "MemberExpression",
                            "start": 215,
                            "end": 225,
                            "object": {
                              "type": "Identifier",
                              "start": 215,
                              "end": 219,
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 220,
                              "end": 224,
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
