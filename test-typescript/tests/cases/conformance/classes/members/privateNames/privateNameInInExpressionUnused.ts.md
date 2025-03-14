__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 223,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 222,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 222,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 35,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 16,
              "end": 23,
              "name": "unused"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 34,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 25,
                "end": 34
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 63,
            "end": 81,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 63,
              "end": 69,
              "name": "brand"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 80,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 71,
                "end": 80
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 220,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 111,
              "decorators": [],
              "name": "isFoo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 111,
              "end": 220,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 130,
                "end": 220,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 195,
                    "end": 214,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 202,
                      "end": 213,
                      "operator": "in",
                      "left": {
                        "type": "PrivateIdentifier",
                        "start": 202,
                        "end": 208,
                        "name": "brand"
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 213,
                        "decorators": [],
                        "name": "v",
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
                  "start": 112,
                  "end": 118,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 113,
                    "end": 118,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 115,
                      "end": 118
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 119,
                "end": 129,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 121,
                  "end": 129,
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 122,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 129,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 126,
                      "end": 129,
                      "typeName": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 129,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
                      }
                    }
                  }
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
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
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
