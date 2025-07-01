__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NullLogger",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 27
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
              "name": "ILogger",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 46
            },
            "typeArguments": null,
            "start": 39,
            "end": 46
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "information",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 75
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
                    "type": "TSBooleanKeyword",
                    "start": 79,
                    "end": 86
                  },
                  "start": 77,
                  "end": 86
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 96,
                        "end": 101
                      },
                      "start": 89,
                      "end": 102
                    }
                  ],
                  "start": 87,
                  "end": 104
                },
                "expression": false,
                "start": 75,
                "end": 104
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 57,
              "end": 104
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "debug",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 125
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
                    "type": "TSBooleanKeyword",
                    "start": 129,
                    "end": 136
                  },
                  "start": 127,
                  "end": 136
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 146,
                        "end": 151
                      },
                      "start": 139,
                      "end": 152
                    }
                  ],
                  "start": 137,
                  "end": 154
                },
                "expression": false,
                "start": 125,
                "end": 154
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 113,
              "end": 154
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "warning",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 177
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
                    "type": "TSBooleanKeyword",
                    "start": 181,
                    "end": 188
                  },
                  "start": 179,
                  "end": 188
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 198,
                        "end": 203
                      },
                      "start": 191,
                      "end": 204
                    }
                  ],
                  "start": 189,
                  "end": 206
                },
                "expression": false,
                "start": 177,
                "end": 206
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 163,
              "end": 206
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 227
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
                    "type": "TSBooleanKeyword",
                    "start": 231,
                    "end": 238
                  },
                  "start": 229,
                  "end": 238
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 248,
                        "end": 253
                      },
                      "start": 241,
                      "end": 254
                    }
                  ],
                  "start": 239,
                  "end": 256
                },
                "expression": false,
                "start": 227,
                "end": 256
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 215,
              "end": 256
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fatal",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 277
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
                    "type": "TSBooleanKeyword",
                    "start": 281,
                    "end": 288
                  },
                  "start": 279,
                  "end": 288
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 298,
                        "end": 303
                      },
                      "start": 291,
                      "end": 304
                    }
                  ],
                  "start": 289,
                  "end": 306
                },
                "expression": false,
                "start": 277,
                "end": 306
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 265,
              "end": 306
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "log",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 325
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 329,
                        "end": 335
                      },
                      "start": 327,
                      "end": 335
                    },
                    "start": 326,
                    "end": 335
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 338,
                    "end": 342
                  },
                  "start": 336,
                  "end": 342
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 343,
                  "end": 354
                },
                "expression": false,
                "start": 325,
                "end": 354
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 315,
              "end": 354
            }
          ],
          "start": 47,
          "end": 360
        },
        "abstract": false,
        "declare": false,
        "start": 11,
        "end": 360
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4,
      "end": 360
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 4,
  "end": 360
}
```
