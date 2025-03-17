__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 337,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 94,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 94,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 41,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 35,
              "decorators": [],
              "name": "fnOverload",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 41,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 41,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 81,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 65,
              "decorators": [],
              "name": "fnOverload",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 65,
              "end": 81,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 78,
                "end": 81,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 66,
                  "end": 77,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 71,
                      "end": 77
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 192,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 106,
        "end": 192,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 114,
            "end": 135,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 131,
              "decorators": [],
              "name": "fnOverload",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 131,
              "end": 135,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 176,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 159,
              "decorators": [],
              "name": "fnOverload",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 159,
              "end": 176,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 173,
                "end": 176,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 160,
                  "end": 172,
                  "decorators": [],
                  "name": "foo",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 164,
                    "end": 172,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 166,
                      "end": 172
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 105,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 194,
      "end": 336,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 202,
        "end": 336,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 207,
            "end": 239,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 218,
              "decorators": [],
              "name": "attr",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 218,
              "end": 239,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 219,
                  "end": 230,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 223,
                    "end": 230,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 224,
                      "end": 230
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 231,
                "end": 238,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 232,
                  "end": 238
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 243,
            "end": 284,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 250,
              "end": 254,
              "decorators": [],
              "name": "attr",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 254,
              "end": 284,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 255,
                  "end": 266,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 259,
                    "end": 266,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 260,
                      "end": 266
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 268,
                  "end": 280,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 273,
                    "end": 280,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 274,
                      "end": 280
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 281,
                "end": 283,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 282,
                  "end": 283,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 283,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 288,
            "end": 334,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 299,
              "decorators": [],
              "name": "attr",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 299,
              "end": 334,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 328,
                "end": 334,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 300,
                  "end": 309,
                  "decorators": [],
                  "name": "first",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 305,
                    "end": 309,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 306,
                      "end": 309
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 311,
                  "end": 322,
                  "decorators": [],
                  "name": "second",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 318,
                    "end": 322,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 319,
                      "end": 322
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 323,
                "end": 327,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 324,
                  "end": 327
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 201,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
