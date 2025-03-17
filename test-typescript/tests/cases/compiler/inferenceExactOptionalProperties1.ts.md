__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 79,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "name": "Test1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 13,
        "end": 68,
        "checkType": {
          "type": "TSTypeLiteral",
          "start": 13,
          "end": 29,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 15,
              "end": 27,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 15,
                "end": 19,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 20,
                "end": 27,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 22,
                  "end": 27
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 38,
          "end": 56,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 40,
              "end": 54,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 40,
                "end": 44,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 45,
                "end": 54,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 47,
                  "end": 54,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 53,
                    "end": 54,
                    "name": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 59,
          "end": 60,
          "typeName": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 63,
          "end": 68,
          "literal": {
            "type": "Literal",
            "start": 63,
            "end": 68,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
