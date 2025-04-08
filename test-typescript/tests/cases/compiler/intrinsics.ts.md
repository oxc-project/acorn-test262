__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 295,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 34,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 34,
            "name": "hasOwnProperty",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 34,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 34,
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 34,
                  "name": "hasOwnProperty",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 46,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 56,
        "end": 165,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 62,
            "end": 83,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 69,
              "end": 83,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 73,
                  "end": 82,
                  "id": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 82,
                    "name": "__proto__",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 88,
            "end": 110,
            "id": {
              "type": "Identifier",
              "start": 98,
              "end": 107,
              "name": "__proto__",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 108,
              "end": 110,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 116,
            "end": 163,
            "id": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 160,
              "end": 163,
              "body": []
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 123,
              "end": 159,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 124,
                  "end": 158,
                  "name": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 134,
                    "end": 158,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 136,
                        "end": 156,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 145,
                          "name": "__proto__",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 145,
                          "end": 156,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 147,
                            "end": 156,
                            "typeName": {
                              "type": "Identifier",
                              "start": 147,
                              "end": 156,
                              "name": "__proto__",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 181,
      "expression": {
        "type": "AssignmentExpression",
        "start": 167,
        "end": 180,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 167,
          "end": 176,
          "name": "__proto__",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 179,
          "end": 180,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 214,
      "end": 231,
      "expression": {
        "type": "AssignmentExpression",
        "start": 214,
        "end": 230,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 214,
          "end": 226,
          "object": {
            "type": "Identifier",
            "start": 214,
            "end": 216,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 217,
            "end": 226,
            "name": "__proto__",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 229,
          "end": 230,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 233,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 242,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 254,
        "end": 257,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 242,
        "end": 253,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 243,
            "end": 252,
            "name": {
              "type": "Identifier",
              "start": 243,
              "end": 252,
              "name": "__proto__",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 258,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 294,
          "id": {
            "type": "Identifier",
            "start": 262,
            "end": 294,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 265,
              "end": 294,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 267,
                "end": 294,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 268,
                    "end": 285,
                    "name": "__proto__",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 277,
                      "end": 285,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 279,
                        "end": 285
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 287,
                  "end": 294,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 290,
                    "end": 294
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
