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
        "name": "CSSProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "color",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "NestedCSSProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "NestedSelector",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "name": "NestedSelector",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "CSSProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 171,
            "name": "stylen",
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
                  "name": "NestedCSSProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 184,
                  "name": "nested",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 192,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 196,
                              "end": 202,
                              "name": "colour",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 204,
                              "end": 209,
                              "value": "red",
                              "raw": "'red'"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
