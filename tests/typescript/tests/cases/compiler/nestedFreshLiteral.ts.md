__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 215,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "CSSProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 40,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 38,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 29,
              "decorators": [],
              "name": "color",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 41,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 65,
        "decorators": [],
        "name": "NestedCSSProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 66,
        "end": 95,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 93,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 76,
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 79,
                "end": 93,
                "typeName": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 93,
                  "decorators": [],
                  "name": "NestedSelector",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 96,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 120,
        "decorators": [],
        "name": "NestedSelector",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 122,
        "end": 143,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 126,
            "end": 141,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 130,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 140,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 132,
                "end": 140,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 140,
                  "decorators": [],
                  "name": "CSSProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 215,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 171,
            "decorators": [],
            "name": "stylen",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 171,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 157,
                "end": 171,
                "typeName": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 171,
                  "decorators": [],
                  "name": "NestedCSSProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 174,
            "end": 215,
            "properties": [
              {
                "type": "Property",
                "start": 178,
                "end": 213,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 184,
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 186,
                  "end": 213,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 188,
                      "end": 211,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 192,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 194,
                        "end": 211,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 196,
                            "end": 209,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 196,
                              "end": 202,
                              "decorators": [],
                              "name": "colour",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 204,
                              "end": 209,
                              "value": "red",
                              "raw": "'red'"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
