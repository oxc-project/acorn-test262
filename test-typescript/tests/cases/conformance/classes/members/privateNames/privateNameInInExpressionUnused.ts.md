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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 222,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 35,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 16,
              "end": 23,
              "name": "unused"
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
              "start": 23,
              "end": 34,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 25,
                "end": 34
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 63,
            "end": 81,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 63,
              "end": 69,
              "name": "brand"
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
              "start": 69,
              "end": 80,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 71,
                "end": 80
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 220,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 111,
              "name": "isFoo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 111,
              "end": 220,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 112,
                  "end": 118,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 113,
                    "end": 118,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 115,
                      "end": 118
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
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
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
