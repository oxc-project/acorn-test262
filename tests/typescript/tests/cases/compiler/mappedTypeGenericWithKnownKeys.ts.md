__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 33
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Shape",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 39
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 54
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 55,
                    "end": 61
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 63,
                    "end": 69
                  }
                ],
                "start": 54,
                "end": 70
              },
              "start": 48,
              "end": 70
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 34,
            "end": 70
          }
        ],
        "start": 33,
        "end": 71
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 84
              },
              "typeArguments": null,
              "start": 79,
              "end": 84
            },
            "start": 77,
            "end": 84
          },
          "start": 72,
          "end": 84
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 102
                },
                "typeArguments": null,
                "start": 97,
                "end": 102
              },
              "start": 91,
              "end": 102
            },
            "start": 89,
            "end": 102
          },
          "start": 86,
          "end": 102
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 119
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 122,
                    "end": 124
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 134
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Shape",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 141,
                                  "end": 146
                                },
                                "typeArguments": null,
                                "start": 141,
                                "end": 146
                              },
                              "start": 135,
                              "end": 146
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "knownLiteralKey",
                                "raw": "\"knownLiteralKey\"",
                                "start": 149,
                                "end": 166
                              },
                              "start": 149,
                              "end": 166
                            }
                          ],
                          "start": 135,
                          "end": 166
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 168,
                          "end": 174
                        }
                      ],
                      "start": 134,
                      "end": 175
                    },
                    "start": 128,
                    "end": 175
                  },
                  "start": 122,
                  "end": 175
                },
                "definite": false,
                "start": 116,
                "end": 175
              }
            ],
            "declare": false,
            "start": 110,
            "end": 176
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 185
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "knownLiteralKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 201
                },
                "optional": false,
                "computed": false,
                "start": 182,
                "end": 201
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 204,
                "end": 205
              },
              "start": 182,
              "end": 205
            },
            "directive": null,
            "start": 182,
            "end": 206
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 214
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 218
                },
                "optional": false,
                "computed": true,
                "start": 211,
                "end": 219
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 222,
                "end": 223
              },
              "start": 211,
              "end": 223
            },
            "directive": null,
            "start": 211,
            "end": 224
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 233
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unknownLiteralKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 251
                },
                "optional": false,
                "computed": false,
                "start": 230,
                "end": 251
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 254,
                "end": 255
              },
              "start": 230,
              "end": 255
            },
            "directive": null,
            "start": 230,
            "end": 256
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 273
                },
                "property": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 274,
                    "end": 276
                  },
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 280,
                    "end": 286
                  },
                  "start": 274,
                  "end": 286
                },
                "optional": false,
                "computed": true,
                "start": 270,
                "end": 287
              },
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 290,
                "end": 291
              },
              "start": 270,
              "end": 291
            },
            "directive": null,
            "start": 270,
            "end": 292
          }
        ],
        "start": 104,
        "end": 303
      },
      "expression": false,
      "start": 20,
      "end": 303
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 20,
  "end": 303
}
```
