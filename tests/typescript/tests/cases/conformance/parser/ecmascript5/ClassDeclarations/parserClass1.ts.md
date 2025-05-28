__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 4,
  "end": 360,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 4,
      "end": 360,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 11,
        "end": 360,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 27,
          "decorators": [],
          "name": "NullLogger",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 39,
            "end": 46,
            "expression": {
              "type": "Identifier",
              "start": 39,
              "end": 46,
              "decorators": [],
              "name": "ILogger",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "ClassBody",
          "start": 47,
          "end": 360,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 57,
              "end": 104,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 64,
                "end": 75,
                "decorators": [],
                "name": "information",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 75,
                "end": 104,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 77,
                  "end": 86,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 79,
                    "end": 86
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 87,
                  "end": 104,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 89,
                      "end": 102,
                      "argument": {
                        "type": "Literal",
                        "start": 96,
                        "end": 101,
                        "value": false,
                        "raw": "false"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 113,
              "end": 154,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 120,
                "end": 125,
                "decorators": [],
                "name": "debug",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 125,
                "end": 154,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 127,
                  "end": 136,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 129,
                    "end": 136
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 137,
                  "end": 154,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 139,
                      "end": 152,
                      "argument": {
                        "type": "Literal",
                        "start": 146,
                        "end": 151,
                        "value": false,
                        "raw": "false"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 163,
              "end": 206,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 170,
                "end": 177,
                "decorators": [],
                "name": "warning",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 177,
                "end": 206,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 179,
                  "end": 188,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 181,
                    "end": 188
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 189,
                  "end": 206,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 191,
                      "end": 204,
                      "argument": {
                        "type": "Literal",
                        "start": 198,
                        "end": 203,
                        "value": false,
                        "raw": "false"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 215,
              "end": 256,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 222,
                "end": 227,
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 227,
                "end": 256,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 229,
                  "end": 238,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 231,
                    "end": 238
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 239,
                  "end": 256,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 241,
                      "end": 254,
                      "argument": {
                        "type": "Literal",
                        "start": 248,
                        "end": 253,
                        "value": false,
                        "raw": "false"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 265,
              "end": 306,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 272,
                "end": 277,
                "decorators": [],
                "name": "fatal",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 277,
                "end": 306,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 279,
                  "end": 288,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 281,
                    "end": 288
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 289,
                  "end": 306,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 291,
                      "end": 304,
                      "argument": {
                        "type": "Literal",
                        "start": 298,
                        "end": 303,
                        "value": false,
                        "raw": "false"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 315,
              "end": 354,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 322,
                "end": 325,
                "decorators": [],
                "name": "log",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 325,
                "end": 354,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 326,
                    "end": 335,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 327,
                      "end": 335,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 329,
                        "end": 335
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 336,
                  "end": 342,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 338,
                    "end": 342
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 343,
                  "end": 354,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
