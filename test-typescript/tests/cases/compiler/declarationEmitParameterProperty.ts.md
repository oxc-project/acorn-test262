declarationEmitParameterProperty.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 61,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 61,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 61,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 59,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 32,
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
                "start": 32,
                "end": 59,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 54,
                  "end": 59,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 33,
                    "end": 52,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 52,
                      "decorators": [],
                      "name": "bar",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 44,
                        "end": 52,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 46,
                          "end": 52
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
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
