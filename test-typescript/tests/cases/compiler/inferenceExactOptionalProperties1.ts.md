__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 69,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null
      },
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
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 15,
                "end": 19,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 20,
                "end": 27,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 22,
                  "end": 27
                }
              }
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
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 40,
                "end": 44,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
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
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 63,
          "end": 68,
          "literal": {
            "type": "Literal",
            "start": 63,
            "end": 68,
            "raw": "false",
            "value": false,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 59,
          "end": 60,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
