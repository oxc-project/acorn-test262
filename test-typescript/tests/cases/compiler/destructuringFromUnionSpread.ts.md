__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 25,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 25,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 23,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
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
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 26,
      "end": 51,
      "body": {
        "type": "TSInterfaceBody",
        "start": 38,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 49,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 75,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 75,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 70,
                "end": 75,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 70,
                    "end": 71,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 74,
                    "end": 75,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 75,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 99,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 99,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 83,
            "end": 88,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 85,
                "end": 86,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 91,
            "end": 99,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 93,
                "end": 97,
                "argument": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
