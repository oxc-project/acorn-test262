__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 59,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 59,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 57,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 24,
                        "end": 26,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 26,
                        "end": 33,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 27,
                          "end": 33
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
            },
            "value": {
              "type": "ArrayExpression",
              "start": 40,
              "end": 56,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 41,
                  "end": 47,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 42,
                      "end": 46,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 42,
                        "end": 44,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 45,
                        "end": 46,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 49,
                  "end": 55,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 50,
                      "end": 54,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 52,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 53,
                        "end": 54,
                        "value": 2,
                        "raw": "2"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ]
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
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
