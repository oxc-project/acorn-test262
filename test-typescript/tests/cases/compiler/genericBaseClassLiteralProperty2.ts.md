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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 25,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 21,
        "decorators": [],
        "name": "CollectionItem2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 27,
      "end": 184,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 80,
        "end": 184,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 86,
            "end": 125,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 97,
              "decorators": [],
              "name": "_itemsByKey",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                    "readonly": false,
                    "static": false,
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
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 130,
            "end": 182,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 141,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 141,
              "end": 182,
              "async": false,
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
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 154,
                          "end": 158
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 170,
                          "decorators": [],
                          "name": "_itemsByKey",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 173,
                        "end": 175,
                        "properties": []
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 48,
        "decorators": [],
        "name": "BaseCollection2",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 48,
        "end": 79,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 49,
            "end": 78,
            "const": false,
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
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 49,
              "end": 54,
              "decorators": [],
              "name": "TItem",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 186,
      "end": 333,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 243,
        "end": 333,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 249,
            "end": 331,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 249,
              "end": 258,
              "decorators": [],
              "name": "fillItems",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 258,
              "end": 331,
              "async": false,
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
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 292,
                          "end": 308,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 292,
                            "end": 296
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 297,
                            "end": 308,
                            "decorators": [],
                            "name": "_itemsByKey",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 309,
                          "end": 316,
                          "raw": "'dummy'",
                          "value": "dummy"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 320,
                        "end": 324,
                        "decorators": [],
                        "name": "item",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 201,
        "decorators": [],
        "name": "DataView2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 210,
        "end": 225,
        "decorators": [],
        "name": "BaseCollection2",
        "optional": false
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
              "optional": false
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
