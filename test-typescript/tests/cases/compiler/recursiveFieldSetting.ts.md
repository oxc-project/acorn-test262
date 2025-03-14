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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 28,
        "end": 157,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 86,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 45,
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
              "start": 45,
              "end": 86,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 86,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 91,
            "end": 155,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 104,
              "decorators": [],
              "name": "depth",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
              "alternate": {
                "type": "Literal",
                "start": 153,
                "end": 154,
                "raw": "0",
                "value": 0
              },
              "consequent": {
                "type": "BinaryExpression",
                "start": 129,
                "end": 150,
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "start": 129,
                  "end": 146,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 129,
                    "end": 140,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 129,
                      "end": 133
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 140,
                      "decorators": [],
                      "name": "parent",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 146,
                    "decorators": [],
                    "name": "depth",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 149,
                  "end": 150,
                  "raw": "1",
                  "value": 1
                }
              },
              "test": {
                "type": "MemberExpression",
                "start": 115,
                "end": 126,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 115,
                  "end": 119
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 126,
                  "decorators": [],
                  "name": "parent",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 27,
        "decorators": [],
        "name": "Recursive1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 159,
      "end": 243,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 243,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 182,
            "end": 202,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 188,
              "decorators": [],
              "name": "parent",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 207,
            "end": 241,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 212,
              "decorators": [],
              "name": "depth",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 223,
                "end": 234,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 223,
                  "end": 227
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 234,
                  "decorators": [],
                  "name": "parent",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 235,
                "end": 240,
                "decorators": [],
                "name": "depth",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 175,
        "decorators": [],
        "name": "Recursive2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 245,
      "end": 344,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 262,
        "end": 344,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 268,
            "end": 288,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 274,
              "decorators": [],
              "name": "parent",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 293,
            "end": 327,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 293,
              "end": 298,
              "decorators": [],
              "name": "depth",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 309,
                "end": 320,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 309,
                  "end": 313
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 320,
                  "decorators": [],
                  "name": "parent",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 321,
                "end": 326,
                "decorators": [],
                "name": "alpha",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 332,
            "end": 342,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 332,
              "end": 337,
              "decorators": [],
              "name": "alpha",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 340,
              "end": 341,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 261,
        "decorators": [],
        "name": "Recursive3",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
