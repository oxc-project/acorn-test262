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
        "name": "first",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 38,
                      "end": 39
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 42,
                      "end": 43
                    },
                    "computed": false,
                    "start": 38,
                    "end": 43
                  }
                ],
                "start": 36,
                "end": 45
              },
              "const": false,
              "declare": false,
              "start": 29,
              "end": 45
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 22,
            "end": 45
          }
        ],
        "start": 16,
        "end": 47
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "second",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 65
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 88,
                      "end": 89
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 92,
                      "end": 93
                    },
                    "computed": false,
                    "start": 88,
                    "end": 93
                  }
                ],
                "start": 86,
                "end": 95
              },
              "const": false,
              "declare": false,
              "start": 79,
              "end": 95
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 72,
            "end": 95
          }
        ],
        "start": 66,
        "end": 97
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 49,
      "end": 97
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 109
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 122
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
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
                          "name": "first",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 130,
                          "end": 135
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 136,
                          "end": 137
                        },
                        "start": 130,
                        "end": 137
                      },
                      "typeArguments": null,
                      "start": 130,
                      "end": 137
                    },
                    "start": 128,
                    "end": 137
                  },
                  "start": 123,
                  "end": 137
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 139,
                "end": 147
              },
              "expression": false,
              "start": 122,
              "end": 147
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 116,
            "end": 147
          }
        ],
        "start": 110,
        "end": 149
      },
      "abstract": false,
      "declare": false,
      "start": 99,
      "end": 149
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 164
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 177
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 199
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
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
                          "name": "second",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 207,
                          "end": 213
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 214,
                          "end": 215
                        },
                        "start": 207,
                        "end": 215
                      },
                      "typeArguments": null,
                      "start": 207,
                      "end": 215
                    },
                    "start": 205,
                    "end": 215
                  },
                  "start": 200,
                  "end": 215
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 217,
                "end": 224
              },
              "expression": false,
              "start": 199,
              "end": 224
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": true,
            "optional": false,
            "accessibility": null,
            "start": 184,
            "end": 224
          }
        ],
        "start": 178,
        "end": 226
      },
      "abstract": false,
      "declare": false,
      "start": 151,
      "end": 226
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloadingFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 237,
        "end": 256
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 265
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 267
            },
            "start": 260,
            "end": 267
          },
          "typeArguments": null,
          "start": 260,
          "end": 267
        },
        "start": 258,
        "end": 267
      },
      "body": null,
      "expression": false,
      "start": 228,
      "end": 267
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloadingFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 296
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "name": "second",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 306
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 308
            },
            "start": 300,
            "end": 308
          },
          "typeArguments": null,
          "start": 300,
          "end": 308
        },
        "start": 298,
        "end": 308
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "second",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 328
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 330
                },
                "optional": false,
                "computed": false,
                "start": 322,
                "end": 330
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 332
              },
              "optional": false,
              "computed": false,
              "start": 322,
              "end": 332
            },
            "start": 315,
            "end": 332
          }
        ],
        "start": 309,
        "end": 334
      },
      "expression": false,
      "start": 268,
      "end": 334
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 334
}
```
