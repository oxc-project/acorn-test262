__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Math2d",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 26
      },
      "start": 0,
      "end": 27
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2D",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 41
      },
      "start": 29,
      "end": 42
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2D",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 65
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 84
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 89,
                    "end": 90
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 92,
                      "end": 98
                    },
                    "start": 90,
                    "end": 98
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 89,
                  "end": 99
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 102,
                    "end": 103
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 105,
                      "end": 111
                    },
                    "start": 103,
                    "end": 111
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 102,
                  "end": 112
                }
              ],
              "start": 85,
              "end": 115
            },
            "declare": false,
            "start": 69,
            "end": 115
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Vector",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 130
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 147
                },
                "typeArguments": null,
                "start": 142,
                "end": 147
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 152,
                    "end": 153
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 155,
                      "end": 161
                    },
                    "start": 153,
                    "end": 161
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
                  "start": 152,
                  "end": 162
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
                    "start": 165,
                    "end": 166
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 168,
                      "end": 174
                    },
                    "start": 166,
                    "end": 174
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
                  "start": 165,
                  "end": 175
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
                    "start": 178,
                    "end": 189
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 193,
                            "end": 199
                          },
                          "start": 191,
                          "end": 199
                        },
                        "start": 190,
                        "end": 199
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 204,
                            "end": 210
                          },
                          "start": 202,
                          "end": 210
                        },
                        "start": 201,
                        "end": 210
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 189,
                    "end": 212
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 178,
                  "end": 212
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "translate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 225
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 230,
                            "end": 236
                          },
                          "start": 228,
                          "end": 236
                        },
                        "start": 226,
                        "end": 236
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dy",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 242,
                            "end": 248
                          },
                          "start": 240,
                          "end": 248
                        },
                        "start": 238,
                        "end": 248
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Vector",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 251,
                          "end": 257
                        },
                        "typeArguments": null,
                        "start": 251,
                        "end": 257
                      },
                      "start": 249,
                      "end": 257
                    },
                    "body": null,
                    "expression": false,
                    "start": 225,
                    "end": 258
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 216,
                  "end": 258
                }
              ],
              "start": 148,
              "end": 261
            },
            "abstract": false,
            "declare": false,
            "start": 118,
            "end": 261
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "getLength",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 282
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Vector",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 286,
                      "end": 292
                    },
                    "typeArguments": null,
                    "start": 286,
                    "end": 292
                  },
                  "start": 284,
                  "end": 292
                },
                "start": 283,
                "end": 292
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 295,
                "end": 301
              },
              "start": 293,
              "end": 301
            },
            "body": null,
            "expression": false,
            "start": 264,
            "end": 302
          }
        ],
        "start": 66,
        "end": 305
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 44,
      "end": 305
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 307
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Math2d",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 18
          },
          "start": 7,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "math2d",
        "raw": "'math2d'",
        "start": 24,
        "end": 32
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "math2d",
        "raw": "'math2d'",
        "start": 71,
        "end": 79
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Vector",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 129
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reverse",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 141
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math2d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 145,
                          "end": 151
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 152,
                          "end": 157
                        },
                        "start": 145,
                        "end": 157
                      },
                      "typeArguments": null,
                      "start": 145,
                      "end": 157
                    },
                    "start": 143,
                    "end": 157
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 134,
                  "end": 158
                }
              ],
              "start": 130,
              "end": 161
            },
            "declare": false,
            "start": 113,
            "end": 161
          }
        ],
        "start": 80,
        "end": 163
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 56,
      "end": 163
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 164
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 58
          },
          "start": 52,
          "end": 58
        }
      ],
      "source": {
        "type": "Literal",
        "value": "math2d",
        "raw": "'math2d'",
        "start": 64,
        "end": 72
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 73
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 79
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 87
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Vector",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 94
              },
              "optional": false,
              "computed": false,
              "start": 86,
              "end": 94
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 95,
                "end": 96
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 98,
                "end": 99
              }
            ],
            "start": 82,
            "end": 100
          },
          "definite": false,
          "start": 78,
          "end": 100
        }
      ],
      "declare": false,
      "start": 74,
      "end": 101
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
            "name": "magnitude",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 115
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 119
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getLength",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 129
              },
              "optional": false,
              "computed": false,
              "start": 118,
              "end": 129
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 131
              }
            ],
            "optional": false,
            "start": 118,
            "end": 132
          },
          "definite": false,
          "start": 106,
          "end": 132
        }
      ],
      "declare": false,
      "start": 102,
      "end": 133
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 142
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 148
                  },
                  "start": 141,
                  "end": 148
                },
                "typeArguments": null,
                "start": 141,
                "end": 148
              },
              "start": 139,
              "end": 148
            },
            "start": 138,
            "end": 148
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 152
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "translate",
                "optional": false,
                "typeAnnotation": null,
                "start": 153,
                "end": 162
              },
              "optional": false,
              "computed": false,
              "start": 151,
              "end": 162
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 163,
                "end": 164
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 166,
                "end": 167
              }
            ],
            "optional": false,
            "start": 151,
            "end": 168
          },
          "definite": false,
          "start": 138,
          "end": 168
        }
      ],
      "declare": false,
      "start": 134,
      "end": 169
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 170,
          "end": 171
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 175
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "reverse",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 183
            },
            "optional": false,
            "computed": false,
            "start": 174,
            "end": 183
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 174,
          "end": 185
        },
        "start": 170,
        "end": 185
      },
      "directive": null,
      "start": 170,
      "end": 186
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
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 192
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 196
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 198
            },
            "optional": false,
            "computed": false,
            "start": 195,
            "end": 198
          },
          "definite": false,
          "start": 191,
          "end": 198
        }
      ],
      "declare": false,
      "start": 187,
      "end": 199
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 199
}
```
