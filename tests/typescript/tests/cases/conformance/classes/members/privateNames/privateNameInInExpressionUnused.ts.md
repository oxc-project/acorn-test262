__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 222,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 222,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 222,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 35,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 16,
              "end": 23,
              "name": "unused"
            },
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
            "type": "PropertyDefinition",
            "start": 63,
            "end": 81,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 63,
              "end": 69,
              "name": "brand"
            },
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
            "start": 106,
            "end": 220,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 111,
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 111,
              "end": 220,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                  "parameterName": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 122,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": false,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
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
                      "left": {
                        "type": "PrivateIdentifier",
                        "start": 202,
                        "end": 208,
                        "name": "brand"
                      },
                      "operator": "in",
                      "right": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 213,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
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
