__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 345,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 27,
        "name": "Recursive1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 28,
        "end": 157,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 86,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 45,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 45,
              "end": 86,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "parent",
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
                          "name": "Recursive1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 86,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 91,
            "end": 155,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 104,
              "name": "depth",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "parent",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                      "name": "parent",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 146,
                    "name": "depth",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          }
        ]
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
      "start": 159,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 175,
        "name": "Recursive2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 243,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 182,
            "end": 202,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 188,
              "name": "parent",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
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
                  "name": "Recursive2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 207,
            "end": 241,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 212,
              "name": "depth",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "parent",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 235,
                "end": 240,
                "name": "depth",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
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
      "start": 245,
      "end": 344,
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 261,
        "name": "Recursive3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 262,
        "end": 344,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 268,
            "end": 288,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 274,
              "name": "parent",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
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
                  "name": "Recursive3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 293,
            "end": 327,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 293,
              "end": 298,
              "name": "depth",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "parent",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 321,
                "end": 326,
                "name": "alpha",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 332,
            "end": 342,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 332,
              "end": 337,
              "name": "alpha",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 340,
              "end": 341,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
