__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 153,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 26,
        "decorators": [],
        "name": "WithNonPrimitive",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 27,
        "end": 46,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 33,
            "end": 44,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 38,
                "end": 44
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
      "start": 48,
      "end": 96,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 71,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 71,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 71,
                  "decorators": [],
                  "name": "WithNonPrimitive",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 74,
            "end": 95,
            "properties": [
              {
                "type": "Property",
                "start": 76,
                "end": 93,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 79,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 81,
                  "end": 93,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 82,
                      "end": 92,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 85,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 87,
                        "end": 92,
                        "value": "bar",
                        "raw": "\"bar\""
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
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 137,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 121,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 121,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 105,
                "end": 121,
                "typeName": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 121,
                  "decorators": [],
                  "name": "WithNonPrimitive",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 124,
            "end": 136,
            "properties": [
              {
                "type": "Property",
                "start": 125,
                "end": 135,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 128,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 130,
                  "end": 135,
                  "value": "bar",
                  "raw": "\"bar\""
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
