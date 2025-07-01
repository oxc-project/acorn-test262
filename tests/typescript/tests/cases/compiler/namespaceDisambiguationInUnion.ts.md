__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yep",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 33
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 38,
                      "end": 42
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "foo.yep",
                          "raw": "\"foo.yep\"",
                          "start": 44,
                          "end": 53
                        },
                        "start": 44,
                        "end": 53
                      },
                      "start": 42,
                      "end": 53
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 38,
                    "end": 53
                  }
                ],
                "start": 36,
                "end": 55
              },
              "declare": false,
              "start": 25,
              "end": 56
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 18,
            "end": 56
          }
        ],
        "start": 14,
        "end": 58
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 58
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 73
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yep",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 93
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 102
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "bar.yep",
                          "raw": "\"bar.yep\"",
                          "start": 104,
                          "end": 113
                        },
                        "start": 104,
                        "end": 113
                      },
                      "start": 102,
                      "end": 113
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 98,
                    "end": 113
                  }
                ],
                "start": 96,
                "end": 115
              },
              "declare": false,
              "start": 85,
              "end": 116
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 78,
            "end": 116
          }
        ],
        "start": 74,
        "end": 118
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 60,
      "end": 118
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 127
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 136
                },
                "value": {
                  "type": "Literal",
                  "value": "wat.nup",
                  "raw": "\"wat.nup\"",
                  "start": 138,
                  "end": 147
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 132,
                "end": 147
              }
            ],
            "start": 130,
            "end": 149
          },
          "definite": false,
          "start": 126,
          "end": 149
        }
      ],
      "declare": false,
      "start": 120,
      "end": 150
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "val1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 163,
                        "end": 166
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 170
                      },
                      "start": 163,
                      "end": 170
                    },
                    "typeArguments": null,
                    "start": 163,
                    "end": 170
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 173,
                        "end": 176
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 180
                      },
                      "start": 173,
                      "end": 180
                    },
                    "typeArguments": null,
                    "start": 173,
                    "end": 180
                  }
                ],
                "start": 163,
                "end": 180
              },
              "start": 161,
              "end": 180
            },
            "start": 157,
            "end": 180
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 184
          },
          "definite": false,
          "start": 157,
          "end": 184
        }
      ],
      "declare": false,
      "start": 151,
      "end": 185
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 194
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 200,
                      "end": 204
                    },
                    "value": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 206,
                      "end": 209
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 200,
                    "end": 209
                  }
                ],
                "start": 198,
                "end": 211
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 215,
                      "end": 219
                    },
                    "value": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 221,
                      "end": 224
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 215,
                    "end": 224
                  }
                ],
                "start": 213,
                "end": 226
              }
            ],
            "start": 197,
            "end": 227
          },
          "definite": false,
          "start": 193,
          "end": 227
        }
      ],
      "declare": false,
      "start": 187,
      "end": 228
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "val2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 242,
                        "end": 245
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 246,
                        "end": 249
                      },
                      "start": 242,
                      "end": 249
                    },
                    "typeArguments": null,
                    "start": 242,
                    "end": 249
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 251,
                        "end": 254
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 255,
                        "end": 258
                      },
                      "start": 251,
                      "end": 258
                    },
                    "typeArguments": null,
                    "start": 251,
                    "end": 258
                  }
                ],
                "start": 241,
                "end": 259
              },
              "start": 239,
              "end": 259
            },
            "start": 235,
            "end": 259
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 263
          },
          "definite": false,
          "start": 235,
          "end": 263
        }
      ],
      "declare": false,
      "start": 229,
      "end": 264
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 264
}
```
