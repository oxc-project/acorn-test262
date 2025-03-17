__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 79,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "name": "addProp2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 18,
          "end": 24,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 19,
            "end": 24,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 21,
              "end": 24
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 78,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 64,
            "end": 76,
            "argument": {
              "type": "Literal",
              "start": 71,
              "end": 75,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 25,
        "end": 57,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 27,
          "end": 57,
          "parameterName": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 57,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 32,
              "end": 57,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 34,
                  "end": 44,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 37,
                      "end": 43
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 45,
                  "end": 55,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 46,
                    "end": 54,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 48,
                      "end": 54
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
