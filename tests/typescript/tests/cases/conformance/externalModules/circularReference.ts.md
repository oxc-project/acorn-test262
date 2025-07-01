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
          "start": 47,
          "end": 49
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
                  "start": 66,
                  "end": 68
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
                        "start": 73,
                        "end": 75
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
                                "start": 77,
                                "end": 81
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 82,
                                "end": 84
                              },
                              "start": 77,
                              "end": 84
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 85,
                              "end": 87
                            },
                            "start": 77,
                            "end": 87
                          },
                          "typeArguments": null,
                          "start": 77,
                          "end": 87
                        },
                        "start": 75,
                        "end": 87
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
                      "start": 73,
                      "end": 88
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
                        "start": 91,
                        "end": 92
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 94,
                          "end": 100
                        },
                        "start": 92,
                        "end": 100
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
                      "start": 91,
                      "end": 101
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
                        "start": 104,
                        "end": 115
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
                                    "start": 122,
                                    "end": 126
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "m1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 127,
                                    "end": 129
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 122,
                                  "end": 129
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
                                        "start": 136,
                                        "end": 140
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "M1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 141,
                                        "end": 143
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 136,
                                      "end": 143
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 144,
                                      "end": 146
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 136,
                                    "end": 146
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 132,
                                  "end": 148
                                },
                                "start": 122,
                                "end": 148
                              },
                              "directive": null,
                              "start": 122,
                              "end": 149
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
                                      "start": 153,
                                      "end": 157
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 158,
                                      "end": 160
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 153,
                                    "end": 160
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 161,
                                    "end": 162
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 153,
                                  "end": 162
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10",
                                  "start": 165,
                                  "end": 167
                                },
                                "start": 153,
                                "end": 167
                              },
                              "directive": null,
                              "start": 153,
                              "end": 168
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
                                      "start": 178,
                                      "end": 182
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 183,
                                      "end": 185
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 178,
                                    "end": 185
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 186,
                                    "end": 187
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 178,
                                  "end": 187
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 20,
                                  "raw": "20",
                                  "start": 190,
                                  "end": 192
                                },
                                "start": 178,
                                "end": 192
                              },
                              "directive": null,
                              "start": 178,
                              "end": 193
                            }
                          ],
                          "start": 117,
                          "end": 206
                        },
                        "expression": false,
                        "start": 115,
                        "end": 206
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 104,
                      "end": 206
                    }
                  ],
                  "start": 69,
                  "end": 209
                },
                "abstract": false,
                "declare": false,
                "start": 60,
                "end": 209
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 53,
              "end": 209
            }
          ],
          "start": 50,
          "end": 211
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 40,
        "end": 211
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 211
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 212
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
          "start": 47,
          "end": 49
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
                  "start": 66,
                  "end": 68
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
                        "start": 73,
                        "end": 75
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
                                "start": 77,
                                "end": 81
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 82,
                                "end": 84
                              },
                              "start": 77,
                              "end": 84
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 85,
                              "end": 87
                            },
                            "start": 77,
                            "end": 87
                          },
                          "typeArguments": null,
                          "start": 77,
                          "end": 87
                        },
                        "start": 75,
                        "end": 87
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
                      "start": 73,
                      "end": 88
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
                        "start": 91,
                        "end": 92
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 94,
                          "end": 100
                        },
                        "start": 92,
                        "end": 100
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
                      "start": 91,
                      "end": 100
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
                        "start": 103,
                        "end": 114
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
                                    "start": 121,
                                    "end": 125
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "m1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 126,
                                    "end": 128
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 121,
                                  "end": 128
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
                                        "start": 135,
                                        "end": 139
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "M1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 140,
                                        "end": 142
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 135,
                                      "end": 142
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 143,
                                      "end": 145
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 135,
                                    "end": 145
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 131,
                                  "end": 147
                                },
                                "start": 121,
                                "end": 147
                              },
                              "directive": null,
                              "start": 121,
                              "end": 148
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
                                      "start": 152,
                                      "end": 156
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 157,
                                      "end": 159
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 152,
                                    "end": 159
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 160,
                                    "end": 161
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 152,
                                  "end": 161
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10",
                                  "start": 164,
                                  "end": 166
                                },
                                "start": 152,
                                "end": 166
                              },
                              "directive": null,
                              "start": 152,
                              "end": 167
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
                                      "start": 180,
                                      "end": 184
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 185,
                                      "end": 187
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 180,
                                    "end": 187
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 188,
                                    "end": 189
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 180,
                                  "end": 189
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 20,
                                  "raw": "20",
                                  "start": 192,
                                  "end": 194
                                },
                                "start": 180,
                                "end": 194
                              },
                              "directive": null,
                              "start": 180,
                              "end": 195
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
                                    "start": 210,
                                    "end": 213
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
                                        "start": 220,
                                        "end": 222
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "C1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 223,
                                        "end": 225
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 220,
                                      "end": 225
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 216,
                                    "end": 227
                                  },
                                  "definite": false,
                                  "start": 210,
                                  "end": 227
                                }
                              ],
                              "declare": false,
                              "start": 206,
                              "end": 228
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
                                    "start": 232,
                                    "end": 235
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 236,
                                    "end": 237
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 232,
                                  "end": 237
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10",
                                  "start": 240,
                                  "end": 242
                                },
                                "start": 232,
                                "end": 242
                              },
                              "directive": null,
                              "start": 232,
                              "end": 243
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
                                    "start": 253,
                                    "end": 256
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 257,
                                    "end": 258
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 253,
                                  "end": 258
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 20,
                                  "raw": "20",
                                  "start": 261,
                                  "end": 263
                                },
                                "start": 253,
                                "end": 263
                              },
                              "directive": null,
                              "start": 253,
                              "end": 264
                            }
                          ],
                          "start": 116,
                          "end": 280
                        },
                        "expression": false,
                        "start": 114,
                        "end": 280
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 103,
                      "end": 280
                    }
                  ],
                  "start": 69,
                  "end": 283
                },
                "abstract": false,
                "declare": false,
                "start": 60,
                "end": 283
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 53,
              "end": 283
            }
          ],
          "start": 50,
          "end": 285
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 40,
        "end": 285
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 285
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 285
}
```
