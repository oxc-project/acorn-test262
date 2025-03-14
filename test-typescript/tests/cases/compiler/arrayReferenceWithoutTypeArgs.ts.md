arrayReferenceWithoutTypeArgs.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 38,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 38,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 36,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 36,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 36,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 23,
                  "end": 31,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 31,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 26,
                      "end": 31,
                      "typeName": {
                        "type": "Identifier",
                        "start": 26,
                        "end": 31,
                        "decorators": [],
                        "name": "Array",
                        "optional": false
                      }
                    }
                  }
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
        "name": "X",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
