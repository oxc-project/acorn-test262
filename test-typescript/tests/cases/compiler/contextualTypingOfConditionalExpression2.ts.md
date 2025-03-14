contextualTypingOfConditionalExpression2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 19,
                "end": 25
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 67,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 67,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 53,
            "end": 65,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 56,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 36,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 68,
      "end": 106,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 106,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 92,
            "end": 104,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 95,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 97,
                "end": 103
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 176,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 130,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 130,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 116,
                "end": 130,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 117,
                    "end": 121,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 118,
                      "end": 121,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 120,
                        "end": 121,
                        "typeName": {
                          "type": "Identifier",
                          "start": 120,
                          "end": 121,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 123,
                  "end": 130,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 126,
                    "end": 130
                  }
                }
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 133,
            "end": 176,
            "alternate": {
              "type": "ArrowFunctionExpression",
              "start": 158,
              "end": 176,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 173,
                "end": 176,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 159,
                  "end": 168,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 160,
                    "end": 168,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 162,
                      "end": 168
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "start": 140,
              "end": 155,
              "async": false,
              "body": {
                "type": "MemberExpression",
                "start": 150,
                "end": 155,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 151,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 155,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 141,
                  "end": 145,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 145,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 144,
                      "end": 145,
                      "typeName": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 145,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 133,
              "end": 137,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
