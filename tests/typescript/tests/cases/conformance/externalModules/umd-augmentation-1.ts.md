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
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Point",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 51
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
                "start": 55,
                "end": 56
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 58,
                  "end": 64
                },
                "start": 56,
                "end": 64
              },
              "accessibility": null,
              "static": false,
              "start": 55,
              "end": 65
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
                "start": 67,
                "end": 68
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 70,
                  "end": 76
                },
                "start": 68,
                "end": 76
              },
              "accessibility": null,
              "static": false,
              "start": 67,
              "end": 77
            }
          ],
          "start": 52,
          "end": 79
        },
        "declare": false,
        "start": 36,
        "end": 79
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 29,
      "end": 79
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Vector",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 100
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
              "start": 112,
              "end": 117
            },
            "typeArguments": null,
            "start": 112,
            "end": 117
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
                "start": 121,
                "end": 122
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 124,
                  "end": 130
                },
                "start": 122,
                "end": 130
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
              "start": 121,
              "end": 131
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
                "start": 133,
                "end": 134
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 136,
                  "end": 142
                },
                "start": 134,
                "end": 142
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
              "start": 133,
              "end": 143
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
                "start": 145,
                "end": 156
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
                        "start": 160,
                        "end": 166
                      },
                      "start": 158,
                      "end": 166
                    },
                    "start": 157,
                    "end": 166
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
                        "start": 171,
                        "end": 177
                      },
                      "start": 169,
                      "end": 177
                    },
                    "start": 168,
                    "end": 177
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 156,
                "end": 179
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 145,
              "end": 179
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
                "start": 182,
                "end": 191
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
                        "start": 196,
                        "end": 202
                      },
                      "start": 194,
                      "end": 202
                    },
                    "start": 192,
                    "end": 202
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
                        "start": 208,
                        "end": 214
                      },
                      "start": 206,
                      "end": 214
                    },
                    "start": 204,
                    "end": 214
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
                      "start": 217,
                      "end": 223
                    },
                    "typeArguments": null,
                    "start": 217,
                    "end": 223
                  },
                  "start": 215,
                  "end": 223
                },
                "body": null,
                "expression": false,
                "start": 191,
                "end": 224
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 182,
              "end": 224
            }
          ],
          "start": 118,
          "end": 226
        },
        "abstract": false,
        "declare": false,
        "start": 88,
        "end": 226
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 81,
      "end": 226
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getLength",
          "optional": false,
          "typeAnnotation": null,
          "start": 244,
          "end": 253
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
                  "start": 257,
                  "end": 263
                },
                "typeArguments": null,
                "start": 257,
                "end": 263
              },
              "start": 255,
              "end": 263
            },
            "start": 254,
            "end": 263
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 266,
            "end": 272
          },
          "start": 264,
          "end": 272
        },
        "body": null,
        "expression": false,
        "start": 235,
        "end": 273
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 228,
      "end": 273
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 274
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
