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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 16,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForStatement",
      "start": 18,
      "end": 202,
      "init": {
        "type": "VariableDeclaration",
        "start": 23,
        "end": 32,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 27,
            "end": 32,
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
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 34,
        "end": 40,
        "left": {
          "type": "Identifier",
          "start": 34,
          "end": 35,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 38,
          "end": 40,
          "value": 10,
          "raw": "10"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 42,
        "end": 45,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 44,
          "end": 45,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 202,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 53,
            "end": 200,
            "expression": {
              "type": "CallExpression",
              "start": 53,
              "end": 199,
              "callee": {
                "type": "MemberExpression",
                "start": 53,
                "end": 63,
                "object": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 58,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 63,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ClassExpression",
                  "start": 64,
                  "end": 198,
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
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 72,
                    "end": 198,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 82,
                        "end": 101,
                        "decorators": [],
                        "key": {
                          "type": "PrivateIdentifier",
                          "start": 82,
                          "end": 90,
                          "name": "myField"
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Literal",
                          "start": 93,
                          "end": 100,
                          "value": "hello",
                          "raw": "\"hello\""
                        },
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
                        "start": 110,
                        "end": 122,
                        "decorators": [],
                        "key": {
                          "type": "PrivateIdentifier",
                          "start": 110,
                          "end": 117,
                          "name": "method"
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 117,
                          "end": 122,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 120,
                            "end": 122,
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
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 131,
                        "end": 161,
                        "decorators": [],
                        "key": {
                          "type": "PrivateIdentifier",
                          "start": 135,
                          "end": 144,
                          "name": "accessor"
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 144,
                          "end": 161,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                                  "value": 42,
                                  "raw": "42"
                                }
                              }
                            ]
                          },
                          "expression": false
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 170,
                        "end": 192,
                        "decorators": [],
                        "key": {
                          "type": "PrivateIdentifier",
                          "start": 174,
                          "end": 183,
                          "name": "accessor"
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 183,
                          "end": 192,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
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
                          "body": {
                            "type": "BlockStatement",
                            "start": 189,
                            "end": 192,
                            "body": []
                          },
                          "expression": false
                        },
                        "kind": "set",
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
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
