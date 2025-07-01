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
        "name": "WithNonPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 26
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 33,
            "end": 44
          }
        ],
        "start": 27,
        "end": 46
      },
      "declare": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WithNonPrimitive",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 71
                },
                "typeArguments": null,
                "start": 55,
                "end": 71
              },
              "start": 53,
              "end": 71
            },
            "start": 52,
            "end": 71
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 79
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
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 82,
                        "end": 85
                      },
                      "value": {
                        "type": "Literal",
                        "value": "bar",
                        "raw": "\"bar\"",
                        "start": 87,
                        "end": 92
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 82,
                      "end": 92
                    }
                  ],
                  "start": 81,
                  "end": 93
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 76,
                "end": 93
              }
            ],
            "start": 74,
            "end": 95
          },
          "definite": false,
          "start": 52,
          "end": 95
        }
      ],
      "declare": false,
      "start": 48,
      "end": 96
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WithNonPrimitive",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 121
                },
                "typeArguments": null,
                "start": 105,
                "end": 121
              },
              "start": 103,
              "end": 121
            },
            "start": 102,
            "end": 121
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 128
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 130,
                  "end": 135
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 125,
                "end": 135
              }
            ],
            "start": 124,
            "end": 136
          },
          "definite": false,
          "start": 102,
          "end": 136
        }
      ],
      "declare": false,
      "start": 98,
      "end": 137
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 153
}
```
