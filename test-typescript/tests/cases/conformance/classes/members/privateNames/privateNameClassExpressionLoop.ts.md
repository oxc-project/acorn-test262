__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 203,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "name": "array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 27,
            "end": 32,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "let",
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
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 63,
                  "name": "push",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ClassExpression",
                  "start": 64,
                  "end": 198,
                  "id": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 72,
                    "end": 198,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 82,
                        "end": 101,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "PrivateIdentifier",
                          "start": 82,
                          "end": 90,
                          "name": "myField"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 93,
                          "end": 100,
                          "value": "hello",
                          "raw": "\"hello\""
                        },
                        "decorators": [],
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "typeAnnotation": null,
                        "accessibility": null
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 110,
                        "end": 122,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "PrivateIdentifier",
                          "start": 110,
                          "end": 117,
                          "name": "method"
                        },
                        "kind": "method",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 117,
                          "end": 122,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 120,
                            "end": 122,
                            "body": []
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
                        "start": 131,
                        "end": 161,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "PrivateIdentifier",
                          "start": 135,
                          "end": 144,
                          "name": "accessor"
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 144,
                          "end": 161,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                        "start": 170,
                        "end": 192,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "PrivateIdentifier",
                          "start": 174,
                          "end": 183,
                          "name": "accessor"
                        },
                        "kind": "set",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 183,
                          "end": 192,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 184,
                              "end": 187,
                              "name": "val",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 189,
                            "end": 192,
                            "body": []
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
                }
              ],
              "optional": false,
              "typeArguments": null
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
