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
        "start": 56,
        "end": 58
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
                    "start": 76,
                    "end": 85
                  },
                  "init": null,
                  "definite": false,
                  "start": 76,
                  "end": 85
                }
              ],
              "declare": false,
              "start": 72,
              "end": 86
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 65,
            "end": 86
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "__proto__",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 110
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 111,
              "end": 113
            },
            "declare": false,
            "start": 91,
            "end": 113
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
              "start": 125,
              "end": 126
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
                    "start": 127,
                    "end": 128
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
                          "start": 139,
                          "end": 148
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
                              "start": 150,
                              "end": 159
                            },
                            "typeArguments": null,
                            "start": 150,
                            "end": 159
                          },
                          "start": 148,
                          "end": 159
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 139,
                        "end": 159
                      }
                    ],
                    "start": 137,
                    "end": 161
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 127,
                  "end": 161
                }
              ],
              "start": 126,
              "end": 162
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 163,
              "end": 166
            },
            "abstract": false,
            "declare": false,
            "start": 119,
            "end": 166
          }
        ],
        "start": 59,
        "end": 168
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 46,
      "end": 168
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
          "start": 170,
          "end": 179
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 182,
          "end": 183
        },
        "start": 170,
        "end": 183
      },
      "directive": null,
      "start": 170,
      "end": 184
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
            "start": 217,
            "end": 219
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__proto__",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 229
          },
          "optional": false,
          "computed": false,
          "start": 217,
          "end": 229
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 232,
          "end": 233
        },
        "start": 217,
        "end": 233
      },
      "directive": null,
      "start": 217,
      "end": 234
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
        "start": 242,
        "end": 245
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
              "start": 246,
              "end": 255
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 246,
            "end": 255
          }
        ],
        "start": 245,
        "end": 256
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 257,
        "end": 260
      },
      "abstract": false,
      "declare": false,
      "start": 236,
      "end": 260
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
                        "start": 282,
                        "end": 288
                      },
                      "start": 280,
                      "end": 288
                    },
                    "start": 271,
                    "end": 288
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 293,
                    "end": 297
                  },
                  "start": 290,
                  "end": 297
                },
                "start": 270,
                "end": 297
              },
              "start": 268,
              "end": 297
            },
            "start": 265,
            "end": 297
          },
          "init": null,
          "definite": false,
          "start": 265,
          "end": 297
        }
      ],
      "declare": false,
      "start": 261,
      "end": 298
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 298
}
```
