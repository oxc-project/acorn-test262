__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 20
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
                "start": 27,
                "end": 28
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 30,
                  "end": 36
                },
                "start": 28,
                "end": 36
              },
              "accessibility": null,
              "static": false,
              "start": 27,
              "end": 37
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
                "start": 42,
                "end": 43
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 45,
                  "end": 51
                },
                "start": 43,
                "end": 51
              },
              "accessibility": null,
              "static": false,
              "start": 42,
              "end": 52
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
                "start": 57,
                "end": 58
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 60,
                  "end": 67
                },
                "start": 58,
                "end": 67
              },
              "accessibility": null,
              "static": false,
              "start": 57,
              "end": 68
            }
          ],
          "start": 21,
          "end": 70
        },
        "declare": false,
        "start": 7,
        "end": 70
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 70
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
              "start": 85,
              "end": 88
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
                    "start": 97,
                    "end": 98
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
                          "start": 102,
                          "end": 106
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
                              "start": 110,
                              "end": 113
                            },
                            "typeArguments": null,
                            "start": 110,
                            "end": 113
                          },
                          "start": 110,
                          "end": 113
                        },
                        "start": 102,
                        "end": 113
                      },
                      "start": 100,
                      "end": 113
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
                                "start": 128,
                                "end": 131
                              },
                              "init": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "TSAsExpression",
                                  "expression": {
                                    "type": "ThisExpression",
                                    "start": 134,
                                    "end": 138
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "members": [],
                                    "start": 142,
                                    "end": 144
                                  },
                                  "start": 134,
                                  "end": 144
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 148,
                                    "end": 151
                                  },
                                  "typeArguments": null,
                                  "start": 148,
                                  "end": 151
                                },
                                "start": 134,
                                "end": 151
                              },
                              "definite": false,
                              "start": 128,
                              "end": 151
                            }
                          ],
                          "declare": false,
                          "start": 124,
                          "end": 152
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
                                    "start": 168,
                                    "end": 171
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 172,
                                    "end": 173
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 168,
                                  "end": 173
                                },
                                "operator": "!=",
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 177,
                                  "end": 181
                                },
                                "start": 168,
                                "end": 181
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
                                    "start": 185,
                                    "end": 188
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 189,
                                    "end": 190
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 185,
                                  "end": 190
                                },
                                "operator": "!=",
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 194,
                                  "end": 198
                                },
                                "start": 185,
                                "end": 198
                              },
                              "start": 168,
                              "end": 198
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
                                  "start": 202,
                                  "end": 205
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 206,
                                  "end": 207
                                },
                                "optional": false,
                                "computed": false,
                                "start": 202,
                                "end": 207
                              },
                              "operator": "!=",
                              "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 211,
                                "end": 215
                              },
                              "start": 202,
                              "end": 215
                            },
                            "start": 168,
                            "end": 215
                          },
                          "start": 161,
                          "end": 216
                        }
                      ],
                      "start": 114,
                      "end": 222
                    },
                    "expression": false,
                    "start": 98,
                    "end": 222
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 97,
                  "end": 222
                }
              ],
              "start": 91,
              "end": 224
            },
            "definite": false,
            "start": 85,
            "end": 224
          }
        ],
        "declare": false,
        "start": 79,
        "end": 224
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 72,
      "end": 224
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 224
}
```
