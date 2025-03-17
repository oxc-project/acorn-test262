__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 334,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 25,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 21,
        "name": "CollectionItem2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 25,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 27,
      "end": 184,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 48,
        "name": "BaseCollection2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 80,
        "end": 184,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 86,
            "end": 125,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 97,
              "name": "_itemsByKey",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 105,
                          "end": 113,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 107,
                            "end": 113
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                          "name": "TItem",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 130,
            "end": 182,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 141,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 141,
              "end": 182,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "_itemsByKey",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
              "name": "TItem",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 63,
              "end": 78,
              "typeName": {
                "type": "Identifier",
                "start": 63,
                "end": 78,
                "name": "CollectionItem2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 186,
      "end": 333,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 201,
        "name": "DataView2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 210,
        "end": 225,
        "name": "BaseCollection2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 243,
        "end": 333,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 249,
            "end": 331,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 249,
              "end": 258,
              "name": "fillItems",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 258,
              "end": 331,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 259,
                  "end": 280,
                  "name": "item",
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
                        "name": "CollectionItem2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                            "name": "_itemsByKey",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 309,
                          "end": 316,
                          "value": "dummy",
                          "raw": "'dummy'"
                        },
                        "computed": true,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 320,
                        "end": 324,
                        "name": "item",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
              "name": "CollectionItem2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
