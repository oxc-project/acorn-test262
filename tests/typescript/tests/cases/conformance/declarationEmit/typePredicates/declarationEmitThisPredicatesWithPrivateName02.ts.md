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
        "name": "Foo",
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 30
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 45
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 53,
                "end": 60
              },
              "start": 51,
              "end": 60
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 61
          }
        ],
        "start": 14,
        "end": 63
      },
      "declare": false,
      "start": 0,
      "end": 63
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "start": 78,
              "end": 81
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
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 91
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "TSThisType",
                          "start": 95,
                          "end": 99
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 103,
                              "end": 106
                            },
                            "typeArguments": null,
                            "start": 103,
                            "end": 106
                          },
                          "start": 103,
                          "end": 106
                        },
                        "start": 95,
                        "end": 106
                      },
                      "start": 93,
                      "end": 106
                    },
                    "body": {
                      "type": "BlockStatement",
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
                                "name": "dis",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 121,
                                "end": 124
                              },
                              "init": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "TSAsExpression",
                                  "expression": {
                                    "type": "ThisExpression",
                                    "start": 127,
                                    "end": 131
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "members": [],
                                    "start": 135,
                                    "end": 137
                                  },
                                  "start": 127,
                                  "end": 137
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 141,
                                    "end": 144
                                  },
                                  "typeArguments": null,
                                  "start": 141,
                                  "end": 144
                                },
                                "start": 127,
                                "end": 144
                              },
                              "definite": false,
                              "start": 121,
                              "end": 144
                            }
                          ],
                          "declare": false,
                          "start": 117,
                          "end": 145
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "dis",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 161,
                                    "end": 164
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 165,
                                    "end": 166
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 161,
                                  "end": 166
                                },
                                "operator": "!=",
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 170,
                                  "end": 174
                                },
                                "start": 161,
                                "end": 174
                              },
                              "operator": "&&",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "dis",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 178,
                                    "end": 181
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 182,
                                    "end": 183
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 178,
                                  "end": 183
                                },
                                "operator": "!=",
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 187,
                                  "end": 191
                                },
                                "start": 178,
                                "end": 191
                              },
                              "start": 161,
                              "end": 191
                            },
                            "operator": "&&",
                            "right": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dis",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 195,
                                  "end": 198
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 199,
                                  "end": 200
                                },
                                "optional": false,
                                "computed": false,
                                "start": 195,
                                "end": 200
                              },
                              "operator": "!=",
                              "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 204,
                                "end": 208
                              },
                              "start": 195,
                              "end": 208
                            },
                            "start": 161,
                            "end": 208
                          },
                          "start": 154,
                          "end": 209
                        }
                      ],
                      "start": 107,
                      "end": 215
                    },
                    "expression": false,
                    "start": 91,
                    "end": 215
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 90,
                  "end": 215
                }
              ],
              "start": 84,
              "end": 217
            },
            "definite": false,
            "start": 78,
            "end": 217
          }
        ],
        "declare": false,
        "start": 72,
        "end": 217
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 65,
      "end": 217
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 217
}
```
