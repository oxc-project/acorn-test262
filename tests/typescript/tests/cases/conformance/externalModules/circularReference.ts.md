__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 11
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo2",
          "raw": "'./foo2'",
          "start": 22,
          "end": 30
        },
        "start": 14,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M1",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 52
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 71
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 76,
                        "end": 78
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 80,
                                "end": 84
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 85,
                                "end": 87
                              },
                              "start": 80,
                              "end": 87
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 88,
                              "end": 90
                            },
                            "start": 80,
                            "end": 90
                          },
                          "typeArguments": null,
                          "start": 80,
                          "end": 90
                        },
                        "start": 78,
                        "end": 90
                      },
                      "value": null,
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 76,
                      "end": 91
                    },
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 94,
                        "end": 95
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 97,
                          "end": 103
                        },
                        "start": 95,
                        "end": 103
                      },
                      "value": null,
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 94,
                      "end": 104
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 107,
                        "end": 118
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 125,
                                    "end": 129
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "m1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 130,
                                    "end": 132
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 125,
                                  "end": 132
                                },
                                "right": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "foo2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 139,
                                        "end": 143
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "M1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 144,
                                        "end": 146
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 139,
                                      "end": 146
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 147,
                                      "end": 149
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 139,
                                    "end": 149
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 135,
                                  "end": 151
                                },
                                "start": 125,
                                "end": 151
                              },
                              "directive": null,
                              "start": 125,
                              "end": 152
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 156,
                                      "end": 160
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 161,
                                      "end": 163
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 156,
                                    "end": 163
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 164,
                                    "end": 165
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 156,
                                  "end": 165
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10",
                                  "start": 168,
                                  "end": 170
                                },
                                "start": 156,
                                "end": 170
                              },
                              "directive": null,
                              "start": 156,
                              "end": 171
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 181,
                                      "end": 185
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 186,
                                      "end": 188
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 181,
                                    "end": 188
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 189,
                                    "end": 190
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 181,
                                  "end": 190
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 20,
                                  "raw": "20",
                                  "start": 193,
                                  "end": 195
                                },
                                "start": 181,
                                "end": 195
                              },
                              "directive": null,
                              "start": 181,
                              "end": 196
                            }
                          ],
                          "start": 120,
                          "end": 209
                        },
                        "expression": false,
                        "start": 118,
                        "end": 209
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 107,
                      "end": 209
                    }
                  ],
                  "start": 72,
                  "end": 212
                },
                "abstract": false,
                "declare": false,
                "start": 63,
                "end": 212
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 56,
              "end": 212
            }
          ],
          "start": 53,
          "end": 214
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 40,
        "end": 214
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 214
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 215
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 11
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo1",
          "raw": "'./foo1'",
          "start": 22,
          "end": 30
        },
        "start": 14,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M1",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 52
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 71
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 76,
                        "end": 78
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 80,
                                "end": 84
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 85,
                                "end": 87
                              },
                              "start": 80,
                              "end": 87
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 88,
                              "end": 90
                            },
                            "start": 80,
                            "end": 90
                          },
                          "typeArguments": null,
                          "start": 80,
                          "end": 90
                        },
                        "start": 78,
                        "end": 90
                      },
                      "value": null,
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 76,
                      "end": 91
                    },
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 94,
                        "end": 95
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 97,
                          "end": 103
                        },
                        "start": 95,
                        "end": 103
                      },
                      "value": null,
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 94,
                      "end": 103
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 117
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 124,
                                    "end": 128
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "m1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 129,
                                    "end": 131
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 124,
                                  "end": 131
                                },
                                "right": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "foo1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 138,
                                        "end": 142
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "M1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 143,
                                        "end": 145
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 138,
                                      "end": 145
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 146,
                                      "end": 148
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 138,
                                    "end": 148
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 134,
                                  "end": 150
                                },
                                "start": 124,
                                "end": 150
                              },
                              "directive": null,
                              "start": 124,
                              "end": 151
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 155,
                                      "end": 159
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 160,
                                      "end": 162
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 155,
                                    "end": 162
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 163,
                                    "end": 164
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 155,
                                  "end": 164
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10",
                                  "start": 167,
                                  "end": 169
                                },
                                "start": 155,
                                "end": 169
                              },
                              "directive": null,
                              "start": 155,
                              "end": 170
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 183,
                                      "end": 187
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 188,
                                      "end": 190
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 183,
                                    "end": 190
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 191,
                                    "end": 192
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 183,
                                  "end": 192
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 20,
                                  "raw": "20",
                                  "start": 195,
                                  "end": 197
                                },
                                "start": 183,
                                "end": 197
                              },
                              "directive": null,
                              "start": 183,
                              "end": 198
                            },
                            {
                              "type": "VariableDeclaration",
                              "kind": "var",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "tmp",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 213,
                                    "end": 216
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "M1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 223,
                                        "end": 225
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "C1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 226,
                                        "end": 228
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 223,
                                      "end": 228
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 219,
                                    "end": 230
                                  },
                                  "definite": false,
                                  "start": 213,
                                  "end": 230
                                }
                              ],
                              "declare": false,
                              "start": 209,
                              "end": 231
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
                                    "name": "tmp",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 235,
                                    "end": 238
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 239,
                                    "end": 240
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 235,
                                  "end": 240
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10",
                                  "start": 243,
                                  "end": 245
                                },
                                "start": 235,
                                "end": 245
                              },
                              "directive": null,
                              "start": 235,
                              "end": 246
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
                                    "name": "tmp",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 256,
                                    "end": 259
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 260,
                                    "end": 261
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 256,
                                  "end": 261
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 20,
                                  "raw": "20",
                                  "start": 264,
                                  "end": 266
                                },
                                "start": 256,
                                "end": 266
                              },
                              "directive": null,
                              "start": 256,
                              "end": 267
                            }
                          ],
                          "start": 119,
                          "end": 283
                        },
                        "expression": false,
                        "start": 117,
                        "end": 283
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 106,
                      "end": 283
                    }
                  ],
                  "start": 72,
                  "end": 286
                },
                "abstract": false,
                "declare": false,
                "start": 63,
                "end": 286
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 56,
              "end": 286
            }
          ],
          "start": 53,
          "end": 288
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 40,
        "end": 288
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 288
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 288
}
```
