restParamModifier2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 56,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 56,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 54,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 54,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 54,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 26,
                  "end": 50,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "RestElement",
                    "start": 26,
                    "end": 50,
                    "argument": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 40,
                      "decorators": [],
                      "name": "rest",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 40,
                      "end": 50,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 42,
                        "end": 50,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 42,
                          "end": 48
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
