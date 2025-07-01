__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CSSProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "color",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 29
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 24,
            "end": 38
          }
        ],
        "start": 20,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NestedCSSProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 65
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 76
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NestedSelector",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 93
                },
                "typeArguments": null,
                "start": 79,
                "end": 93
              },
              "start": 77,
              "end": 93
            },
            "accessibility": null,
            "static": false,
            "start": 70,
            "end": 93
          }
        ],
        "start": 66,
        "end": 95
      },
      "declare": false,
      "start": 41,
      "end": 95
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NestedSelector",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 120
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CSSProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 140
                },
                "typeArguments": null,
                "start": 132,
                "end": 140
              },
              "start": 130,
              "end": 140
            },
            "accessibility": null,
            "static": false,
            "start": 126,
            "end": 141
          }
        ],
        "start": 122,
        "end": 143
      },
      "declare": false,
      "start": 96,
      "end": 143
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stylen",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NestedCSSProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 171
                },
                "typeArguments": null,
                "start": 157,
                "end": 171
              },
              "start": 155,
              "end": 171
            },
            "start": 149,
            "end": 171
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 184
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 188,
                        "end": 192
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "colour",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 196,
                              "end": 202
                            },
                            "value": {
                              "type": "Literal",
                              "value": "red",
                              "raw": "'red'",
                              "start": 204,
                              "end": 209
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 196,
                            "end": 209
                          }
                        ],
                        "start": 194,
                        "end": 211
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 188,
                      "end": 211
                    }
                  ],
                  "start": 186,
                  "end": 213
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 178,
                "end": 213
              }
            ],
            "start": 174,
            "end": 215
          },
          "definite": false,
          "start": 149,
          "end": 215
        }
      ],
      "declare": false,
      "start": 145,
      "end": 215
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 215
}
```
