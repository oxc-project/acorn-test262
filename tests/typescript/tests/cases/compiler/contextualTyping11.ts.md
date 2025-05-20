__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 54,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 54,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 52,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 37,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 23,
                "end": 37,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 23,
                  "end": 35,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 24,
                      "end": 34,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 24,
                        "end": 26,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 26,
                        "end": 33,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 27,
                          "end": 33
                        }
                      }
                    }
                  ]
                }
              }
            },
            "value": {
              "type": "ArrayExpression",
              "start": 40,
              "end": 51,
              "elements": [
                {
                  "type": "TSTypeAssertion",
                  "start": 41,
                  "end": 50,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 47,
                    "end": 49,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 42,
                    "end": 45,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 45,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
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
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
