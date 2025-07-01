__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "hasOwnProperty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasOwnProperty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 34
                },
                "typeArguments": null,
                "start": 20,
                "end": 34
              },
              "start": 18,
              "end": 34
            },
            "start": 4,
            "end": 34
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 34
        }
      ],
      "declare": false,
      "start": 0,
      "end": 35
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 55
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__proto__",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 82
                  },
                  "init": null,
                  "definite": false,
                  "start": 73,
                  "end": 82
                }
              ],
              "declare": false,
              "start": 69,
              "end": 83
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 62,
            "end": 83
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "__proto__",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 107
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 108,
              "end": 110
            },
            "declare": false,
            "start": 88,
            "end": 110
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
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
                    "start": 124,
                    "end": 125
                  },
                  "constraint": {
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
                          "name": "__proto__",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 136,
                          "end": 145
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "__proto__",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 147,
                              "end": 156
                            },
                            "typeArguments": null,
                            "start": 147,
                            "end": 156
                          },
                          "start": 145,
                          "end": 156
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 136,
                        "end": 156
                      }
                    ],
                    "start": 134,
                    "end": 158
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 124,
                  "end": 158
                }
              ],
              "start": 123,
              "end": 159
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 160,
              "end": 163
            },
            "abstract": false,
            "declare": false,
            "start": 116,
            "end": 163
          }
        ],
        "start": 56,
        "end": 165
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 46,
      "end": 165
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "__proto__",
          "optional": false,
          "typeAnnotation": null,
          "start": 167,
          "end": 176
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 179,
          "end": 180
        },
        "start": 167,
        "end": 180
      },
      "directive": null,
      "start": 167,
      "end": 181
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
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 216
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__proto__",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 226
          },
          "optional": false,
          "computed": false,
          "start": 214,
          "end": 226
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 229,
          "end": 230
        },
        "start": 214,
        "end": 230
      },
      "directive": null,
      "start": 214,
      "end": 231
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 242
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "__proto__",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 252
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 243,
            "end": 252
          }
        ],
        "start": 242,
        "end": 253
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 254,
        "end": 257
      },
      "abstract": false,
      "declare": false,
      "start": 233,
      "end": 257
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__proto__",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 279,
                        "end": 285
                      },
                      "start": 277,
                      "end": 285
                    },
                    "start": 268,
                    "end": 285
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 290,
                    "end": 294
                  },
                  "start": 287,
                  "end": 294
                },
                "start": 267,
                "end": 294
              },
              "start": 265,
              "end": 294
            },
            "start": 262,
            "end": 294
          },
          "init": null,
          "definite": false,
          "start": 262,
          "end": 294
        }
      ],
      "declare": false,
      "start": 258,
      "end": 295
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 295
}
```
