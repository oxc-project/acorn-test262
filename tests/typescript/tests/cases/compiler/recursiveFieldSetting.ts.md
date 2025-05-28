__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 344,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 157,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 27,
        "decorators": [],
        "name": "Recursive1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 28,
        "end": 157,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 86,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 45,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 45,
              "end": 86,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 46,
                  "end": 82,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 82,
                    "decorators": [],
                    "name": "parent",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 70,
                      "end": 82,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 72,
                        "end": 82,
                        "typeName": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 82,
                          "decorators": [],
                          "name": "Recursive1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 86,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 91,
            "end": 155,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 104,
              "decorators": [],
              "name": "depth",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 112,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 106,
                "end": 112
              }
            },
            "value": {
              "type": "ConditionalExpression",
              "start": 115,
              "end": 154,
              "test": {
                "type": "MemberExpression",
                "start": 115,
                "end": 126,
                "object": {
                  "type": "ThisExpression",
                  "start": 115,
                  "end": 119
                },
                "property": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 126,
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "consequent": {
                "type": "BinaryExpression",
                "start": 129,
                "end": 150,
                "left": {
                  "type": "MemberExpression",
                  "start": 129,
                  "end": 146,
                  "object": {
                    "type": "MemberExpression",
                    "start": 129,
                    "end": 140,
                    "object": {
                      "type": "ThisExpression",
                      "start": 129,
                      "end": 133
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 140,
                      "decorators": [],
                      "name": "parent",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 146,
                    "decorators": [],
                    "name": "depth",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 149,
                  "end": 150,
                  "value": 1,
                  "raw": "1"
                }
              },
              "alternate": {
                "type": "Literal",
                "start": 153,
                "end": 154,
                "value": 0,
                "raw": "0"
              }
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 159,
      "end": 243,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 175,
        "decorators": [],
        "name": "Recursive2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 243,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 182,
            "end": 202,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 188,
              "decorators": [],
              "name": "parent",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 201,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 191,
                "end": 201,
                "typeName": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 201,
                  "decorators": [],
                  "name": "Recursive2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 207,
            "end": 241,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 212,
              "decorators": [],
              "name": "depth",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 220,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 214,
                "end": 220
              }
            },
            "value": {
              "type": "MemberExpression",
              "start": 223,
              "end": 240,
              "object": {
                "type": "MemberExpression",
                "start": 223,
                "end": 234,
                "object": {
                  "type": "ThisExpression",
                  "start": 223,
                  "end": 227
                },
                "property": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 234,
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 235,
                "end": 240,
                "decorators": [],
                "name": "depth",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 245,
      "end": 344,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 261,
        "decorators": [],
        "name": "Recursive3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 262,
        "end": 344,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 268,
            "end": 288,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 274,
              "decorators": [],
              "name": "parent",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 275,
              "end": 287,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 277,
                "end": 287,
                "typeName": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 287,
                  "decorators": [],
                  "name": "Recursive3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 293,
            "end": 327,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 293,
              "end": 298,
              "decorators": [],
              "name": "depth",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 298,
              "end": 306,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 300,
                "end": 306
              }
            },
            "value": {
              "type": "MemberExpression",
              "start": 309,
              "end": 326,
              "object": {
                "type": "MemberExpression",
                "start": 309,
                "end": 320,
                "object": {
                  "type": "ThisExpression",
                  "start": 309,
                  "end": 313
                },
                "property": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 320,
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 321,
                "end": 326,
                "decorators": [],
                "name": "alpha",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            "type": "PropertyDefinition",
            "start": 332,
            "end": 342,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 332,
              "end": 337,
              "decorators": [],
              "name": "alpha",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 340,
              "end": 341,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
