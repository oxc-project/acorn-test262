unusedParameterProperty1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 82,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 82,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 80,
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
              "end": 80,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 48,
                "end": 80,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 58,
                    "end": 74,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 62,
                        "end": 73,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 66,
                          "decorators": [],
                          "name": "foge",
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 69,
                          "end": 73,
                          "decorators": [],
                          "name": "used",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 26,
                  "end": 46,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 46,
                    "decorators": [],
                    "name": "used",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 40,
                        "end": 46
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
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
