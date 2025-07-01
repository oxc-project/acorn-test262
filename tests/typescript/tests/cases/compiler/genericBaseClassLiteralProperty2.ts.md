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
        "name": "CollectionItem2",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 21
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 22,
        "end": 25
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseCollection2",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 48
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TItem",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 54
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CollectionItem2",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 78
              },
              "typeArguments": null,
              "start": 63,
              "end": 78
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 49,
            "end": 78
          }
        ],
        "start": 48,
        "end": 79
      },
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
              "name": "_itemsByKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 97
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 107,
                            "end": 113
                          },
                          "start": 105,
                          "end": 113
                        },
                        "start": 102,
                        "end": 113
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TItem",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 116,
                          "end": 121
                        },
                        "typeArguments": null,
                        "start": 116,
                        "end": 121
                      },
                      "start": 114,
                      "end": 121
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 101,
                    "end": 122
                  }
                ],
                "start": 99,
                "end": 124
              },
              "start": 97,
              "end": 124
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
            "start": 86,
            "end": 125
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
              "start": 130,
              "end": 141
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 154,
                          "end": 158
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_itemsByKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 159,
                          "end": 170
                        },
                        "optional": false,
                        "computed": false,
                        "start": 154,
                        "end": 170
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 173,
                        "end": 175
                      },
                      "start": 154,
                      "end": 175
                    },
                    "directive": null,
                    "start": 154,
                    "end": 176
                  }
                ],
                "start": 144,
                "end": 182
              },
              "expression": false,
              "start": 141,
              "end": 182
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 130,
            "end": 182
          }
        ],
        "start": 80,
        "end": 184
      },
      "abstract": false,
      "declare": false,
      "start": 27,
      "end": 184
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DataView2",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 201
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseCollection2",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 225
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "CollectionItem2",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 241
            },
            "typeArguments": null,
            "start": 226,
            "end": 241
          }
        ],
        "start": 225,
        "end": 242
      },
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
              "name": "fillItems",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 258
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
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CollectionItem2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 280
                      },
                      "typeArguments": null,
                      "start": 265,
                      "end": 280
                    },
                    "start": 263,
                    "end": 280
                  },
                  "start": 259,
                  "end": 280
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 292,
                            "end": 296
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_itemsByKey",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 297,
                            "end": 308
                          },
                          "optional": false,
                          "computed": false,
                          "start": 292,
                          "end": 308
                        },
                        "property": {
                          "type": "Literal",
                          "value": "dummy",
                          "raw": "'dummy'",
                          "start": 309,
                          "end": 316
                        },
                        "optional": false,
                        "computed": true,
                        "start": 292,
                        "end": 317
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 320,
                        "end": 324
                      },
                      "start": 292,
                      "end": 324
                    },
                    "directive": null,
                    "start": 292,
                    "end": 325
                  }
                ],
                "start": 282,
                "end": 331
              },
              "expression": false,
              "start": 258,
              "end": 331
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 249,
            "end": 331
          }
        ],
        "start": 243,
        "end": 333
      },
      "abstract": false,
      "declare": false,
      "start": 186,
      "end": 333
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 333
}
```
