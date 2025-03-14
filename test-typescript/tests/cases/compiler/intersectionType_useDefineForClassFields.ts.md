__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 50,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 14,
        "end": 50,
        "constraint": {
          "type": "TSIntersectionType",
          "start": 26,
          "end": 42,
          "types": [
            {
              "type": "TSTypeOperator",
              "start": 26,
              "end": 33,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 33,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            {
              "type": "TSStringKeyword",
              "start": 36,
              "end": 42
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "decorators": [],
          "name": "k",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 45,
          "end": 48
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 52,
      "end": 121,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 94,
        "end": 121,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 100,
            "end": 119,
            "argument": {
              "type": "TSAsExpression",
              "start": 107,
              "end": 118,
              "expression": {
                "type": "Literal",
                "start": 107,
                "end": 111,
                "raw": "null",
                "value": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 115,
                "end": 118
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 64,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 68,
          "end": 73,
          "decorators": [],
          "name": "_p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 70,
            "end": 73,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 72,
              "end": 73,
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 74,
        "end": 93,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 76,
          "end": 93,
          "members": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 78,
              "end": 91,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 83,
                "end": 91,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 85,
                  "end": 91,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 88,
                    "end": 91,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 89,
                        "end": 90,
                        "typeName": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 90,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 88,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 67,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 66,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 123,
      "end": 158,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 155,
        "end": 158,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 132,
        "decorators": [],
        "name": "Baz",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 141,
        "end": 154,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 145,
            "end": 153,
            "properties": [
              {
                "type": "Property",
                "start": 147,
                "end": 151,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 150,
                  "end": 151,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 141,
          "end": 144,
          "decorators": [],
          "name": "bar",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
