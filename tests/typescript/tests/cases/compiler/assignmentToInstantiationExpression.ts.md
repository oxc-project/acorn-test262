__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11,
                      "end": 13
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17,
                                "end": 18
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 17,
                              "end": 18
                            }
                          ],
                          "start": 16,
                          "end": 19
                        },
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 25,
                              "end": 26
                            },
                            "typeArguments": null,
                            "start": 25,
                            "end": 26
                          },
                          "start": 22,
                          "end": 26
                        },
                        "start": 16,
                        "end": 26
                      },
                      "start": 14,
                      "end": 26
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 11,
                    "end": 26
                  }
                ],
                "start": 9,
                "end": 28
              },
              "start": 7,
              "end": 28
            },
            "start": 4,
            "end": 28
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 31,
            "end": 33
          },
          "definite": false,
          "start": 4,
          "end": 33
        }
      ],
      "declare": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 38
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 41
            },
            "optional": false,
            "computed": false,
            "start": 35,
            "end": 41
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
              }
            ],
            "start": 41,
            "end": 49
          },
          "start": 35,
          "end": 49
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 1234,
            "raw": "1234",
            "start": 58,
            "end": 62
          },
          "id": null,
          "generator": false,
          "start": 52,
          "end": 62
        },
        "start": 35,
        "end": 62
      },
      "directive": null,
      "start": 35,
      "end": 63
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "getValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 81,
                        "end": 82
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 81,
                      "end": 82
                    }
                  ],
                  "start": 80,
                  "end": 83
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 90
                    },
                    "typeArguments": null,
                    "start": 89,
                    "end": 90
                  },
                  "start": 86,
                  "end": 90
                },
                "start": 80,
                "end": 90
              },
              "start": 78,
              "end": 90
            },
            "start": 70,
            "end": 90
          },
          "init": null,
          "definite": false,
          "start": 70,
          "end": 90
        }
      ],
      "declare": false,
      "start": 66,
      "end": 91
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "getValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 100
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 101,
                "end": 107
              }
            ],
            "start": 100,
            "end": 108
          },
          "start": 92,
          "end": 108
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 1234,
            "raw": "1234",
            "start": 117,
            "end": 121
          },
          "id": null,
          "generator": false,
          "start": 111,
          "end": 121
        },
        "start": 92,
        "end": 121
      },
      "directive": null,
      "start": 92,
      "end": 122
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "getValue2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 142,
                        "end": 143
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 142,
                      "end": 143
                    }
                  ],
                  "start": 141,
                  "end": 144
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 150,
                      "end": 151
                    },
                    "typeArguments": null,
                    "start": 150,
                    "end": 151
                  },
                  "start": 147,
                  "end": 151
                },
                "start": 141,
                "end": 151
              },
              "start": 139,
              "end": 151
            },
            "start": 129,
            "end": 151
          },
          "init": null,
          "definite": true,
          "start": 129,
          "end": 151
        }
      ],
      "declare": false,
      "start": 125,
      "end": 152
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "getValue2",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 162
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 163,
                "end": 169
              }
            ],
            "start": 162,
            "end": 170
          },
          "start": 153,
          "end": 170
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 1234,
            "raw": "1234",
            "start": 179,
            "end": 183
          },
          "id": null,
          "generator": false,
          "start": 173,
          "end": 183
        },
        "start": 153,
        "end": 183
      },
      "directive": null,
      "start": 153,
      "end": 184
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 184
}
```
