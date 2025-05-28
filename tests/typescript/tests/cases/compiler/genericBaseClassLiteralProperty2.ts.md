__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 333,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 25,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 21,
        "decorators": [],
        "name": "CollectionItem2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 25,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 27,
      "end": 184,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 48,
        "decorators": [],
        "name": "BaseCollection2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 48,
        "end": 79,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 49,
            "end": 78,
            "name": {
              "type": "Identifier",
              "start": 49,
              "end": 54,
              "decorators": [],
              "name": "TItem",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 63,
              "end": 78,
              "typeName": {
                "type": "Identifier",
                "start": 63,
                "end": 78,
                "decorators": [],
                "name": "CollectionItem2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 80,
        "end": 184,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 86,
            "end": 125,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 97,
              "decorators": [],
              "name": "_itemsByKey",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 99,
                "end": 124,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 101,
                    "end": 122,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 102,
                        "end": 113,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 105,
                          "end": 113,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 107,
                            "end": 113
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 114,
                      "end": 121,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 116,
                        "end": 121,
                        "typeName": {
                          "type": "Identifier",
                          "start": 116,
                          "end": 121,
                          "decorators": [],
                          "name": "TItem",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 130,
            "end": 182,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 141,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 141,
              "end": 182,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 144,
                "end": 182,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 154,
                    "end": 176,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 154,
                      "end": 175,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 154,
                        "end": 170,
                        "object": {
                          "type": "ThisExpression",
                          "start": 154,
                          "end": 158
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 170,
                          "decorators": [],
                          "name": "_itemsByKey",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 173,
                        "end": 175,
                        "properties": []
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 186,
      "end": 333,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 201,
        "decorators": [],
        "name": "DataView2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 210,
        "end": 225,
        "decorators": [],
        "name": "BaseCollection2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 225,
        "end": 242,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 226,
            "end": 241,
            "typeName": {
              "type": "Identifier",
              "start": 226,
              "end": 241,
              "decorators": [],
              "name": "CollectionItem2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 243,
        "end": 333,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 249,
            "end": 331,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 249,
              "end": 258,
              "decorators": [],
              "name": "fillItems",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 258,
              "end": 331,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 259,
                  "end": 280,
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 263,
                    "end": 280,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 265,
                      "end": 280,
                      "typeName": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 280,
                        "decorators": [],
                        "name": "CollectionItem2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 282,
                "end": 331,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 292,
                    "end": 325,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 292,
                      "end": 324,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 292,
                        "end": 317,
                        "object": {
                          "type": "MemberExpression",
                          "start": 292,
                          "end": 308,
                          "object": {
                            "type": "ThisExpression",
                            "start": 292,
                            "end": 296
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 297,
                            "end": 308,
                            "decorators": [],
                            "name": "_itemsByKey",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 309,
                          "end": 316,
                          "value": "dummy",
                          "raw": "'dummy'"
                        },
                        "optional": false,
                        "computed": true
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 320,
                        "end": 324,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
