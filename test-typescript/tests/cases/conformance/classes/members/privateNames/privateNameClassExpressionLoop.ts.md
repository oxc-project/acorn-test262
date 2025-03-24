__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 202,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 14,
            "end": 16,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForStatement",
      "start": 18,
      "end": 202,
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 202,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 53,
            "end": 200,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 53,
              "end": 199,
              "arguments": [
                {
                  "type": "ClassExpression",
                  "start": 64,
                  "end": 198,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 72,
                    "end": 198,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 82,
                        "end": 101,
                        "accessibility": null,
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "PrivateIdentifier",
                          "start": 82,
                          "end": 90,
                          "name": "myField"
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": null,
                        "value": {
                          "type": "Literal",
                          "start": 93,
                          "end": 100,
                          "raw": "\"hello\"",
                          "value": "hello"
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 110,
                        "end": 122,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "PrivateIdentifier",
                          "start": 110,
                          "end": 117,
                          "name": "method"
                        },
                        "kind": "method",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 117,
                          "end": 122,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 120,
                            "end": 122,
                            "body": []
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
                        "start": 131,
                        "end": 161,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "PrivateIdentifier",
                          "start": 135,
                          "end": 144,
                          "name": "accessor"
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 144,
                          "end": 161,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 147,
                            "end": 161,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 149,
                                "end": 159,
                                "argument": {
                                  "type": "Literal",
                                  "start": 156,
                                  "end": 158,
                                  "raw": "42",
                                  "value": 42
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
                        "start": 170,
                        "end": 192,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "PrivateIdentifier",
                          "start": 174,
                          "end": 183,
                          "name": "accessor"
                        },
                        "kind": "set",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 183,
                          "end": 192,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 189,
                            "end": 192,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 184,
                              "end": 187,
                              "decorators": [],
                              "name": "val",
                              "optional": false,
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
                    "start": 70,
                    "end": 71,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "implements": [],
                  "superClass": null,
                  "superTypeArguments": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 53,
                "end": 63,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 58,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 63,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 23,
        "end": 32,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 27,
            "end": 32,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 31,
              "end": 32,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 34,
        "end": 40,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 34,
          "end": 35,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 38,
          "end": 40,
          "raw": "10",
          "value": 10
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 42,
        "end": 45,
        "argument": {
          "type": "Identifier",
          "start": 44,
          "end": 45,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
