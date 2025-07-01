__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recursive1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 27
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 45
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "parent",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Recursive1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 72,
                          "end": 82
                        },
                        "typeArguments": null,
                        "start": 72,
                        "end": 82
                      },
                      "start": 70,
                      "end": 82
                    },
                    "start": 63,
                    "end": 82
                  },
                  "readonly": true,
                  "static": false,
                  "start": 46,
                  "end": 82
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 84,
                "end": 86
              },
              "expression": false,
              "start": 45,
              "end": 86
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 34,
            "end": 86
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 104
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 106,
                "end": 112
              },
              "start": 104,
              "end": 112
            },
            "value": {
              "type": "ConditionalExpression",
              "test": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 115,
                  "end": 119
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 126
                },
                "optional": false,
                "computed": false,
                "start": 115,
                "end": 126
              },
              "consequent": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 129,
                      "end": 133
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 140
                    },
                    "optional": false,
                    "computed": false,
                    "start": 129,
                    "end": 140
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "depth",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 146
                  },
                  "optional": false,
                  "computed": false,
                  "start": 129,
                  "end": 146
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 149,
                  "end": 150
                },
                "start": 129,
                "end": 150
              },
              "alternate": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 153,
                "end": 154
              },
              "start": 115,
              "end": 154
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 91,
            "end": 155
          }
        ],
        "start": 28,
        "end": 157
      },
      "abstract": false,
      "declare": false,
      "start": 11,
      "end": 157
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recursive2",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 175
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "parent",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 188
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Recursive2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 201
                },
                "typeArguments": null,
                "start": 191,
                "end": 201
              },
              "start": 189,
              "end": 201
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 182,
            "end": 202
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 212
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 214,
                "end": 220
              },
              "start": 212,
              "end": 220
            },
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 223,
                  "end": 227
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 234
                },
                "optional": false,
                "computed": false,
                "start": 223,
                "end": 234
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "depth",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 240
              },
              "optional": false,
              "computed": false,
              "start": 223,
              "end": 240
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 207,
            "end": 241
          }
        ],
        "start": 176,
        "end": 243
      },
      "abstract": false,
      "declare": false,
      "start": 159,
      "end": 243
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recursive3",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 261
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "parent",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 274
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Recursive3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 287
                },
                "typeArguments": null,
                "start": 277,
                "end": 287
              },
              "start": 275,
              "end": 287
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 268,
            "end": 288
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 298
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 300,
                "end": 306
              },
              "start": 298,
              "end": 306
            },
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 309,
                  "end": 313
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 320
                },
                "optional": false,
                "computed": false,
                "start": 309,
                "end": 320
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "alpha",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 326
              },
              "optional": false,
              "computed": false,
              "start": 309,
              "end": 326
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 293,
            "end": 327
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "alpha",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 337
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 340,
              "end": 341
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 332,
            "end": 342
          }
        ],
        "start": 262,
        "end": 344
      },
      "abstract": false,
      "declare": false,
      "start": 245,
      "end": 344
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 11,
  "end": 344
}
```
