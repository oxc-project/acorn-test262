__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 160,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 31,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 18,
            "end": 29,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "F",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 33,
      "end": 160,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 160,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 90,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 61,
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
              "start": 61,
              "end": 90,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 88,
                "end": 90,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 62,
                  "end": 73,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 73,
                    "decorators": [],
                    "name": "a",
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
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 75,
                  "end": 86,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 86,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 83,
                      "end": 86,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 85,
                        "end": 86,
                        "typeName": {
                          "type": "Identifier",
                          "start": 85,
                          "end": 86,
                          "decorators": [],
                          "name": "F",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 158,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 98,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 98,
              "end": 158,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 158,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 111,
                    "end": 152,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 141,
                      "end": 152,
                      "body": []
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 115,
                      "end": 139,
                      "operator": "instanceof",
                      "left": {
                        "type": "MemberExpression",
                        "start": 115,
                        "end": 121,
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
                          "end": 121,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 133,
                        "end": 139,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 133,
                          "end": 137
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 139,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
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
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 40,
        "end": 43,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 41,
            "end": 42,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
