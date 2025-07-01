__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 17,
            "end": 29
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 33
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 35,
                    "end": 41
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 44,
                    "end": 48
                  }
                ],
                "start": 35,
                "end": 48
              },
              "start": 33,
              "end": 48
            },
            "accessibility": null,
            "static": false,
            "start": 30,
            "end": 49
          }
        ],
        "start": 14,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 52
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 59
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 70
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 71,
                          "end": 72
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 87,
                              "end": 90
                            },
                            "typeArguments": null,
                            "start": 87,
                            "end": 90
                          },
                          "start": 81,
                          "end": 90
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 71,
                        "end": 90
                      }
                    ],
                    "start": 70,
                    "end": 91
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 96,
                            "end": 97
                          },
                          "typeArguments": null,
                          "start": 96,
                          "end": 97
                        },
                        "start": 94,
                        "end": 97
                      },
                      "start": 93,
                      "end": 97
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Bar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 104,
                                  "end": 107
                                },
                                "typeArguments": null,
                                "start": 104,
                                "end": 107
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 108,
                                  "end": 109
                                },
                                "typeArguments": null,
                                "start": 108,
                                "end": 109
                              },
                              "start": 104,
                              "end": 110
                            },
                            {
                              "type": "TSNullKeyword",
                              "start": 115,
                              "end": 119
                            }
                          ],
                          "start": 104,
                          "end": 119
                        },
                        "start": 102,
                        "end": 119
                      },
                      "start": 100,
                      "end": 119
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 122,
                    "end": 125
                  },
                  "expression": false,
                  "start": 70,
                  "end": 125
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 66,
                "end": 125
              }
            ],
            "start": 62,
            "end": 127
          },
          "definite": false,
          "start": 58,
          "end": 127
        }
      ],
      "declare": false,
      "start": 54,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 130
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 135
          },
          "optional": false,
          "computed": false,
          "start": 129,
          "end": 135
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 136,
            "end": 141
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 143,
            "end": 147
          }
        ],
        "optional": false,
        "start": 129,
        "end": 148
      },
      "directive": null,
      "start": 129,
      "end": 149
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 204
}
```
