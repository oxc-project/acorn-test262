unusedTypeParameterInLambda1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 72,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 72,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 70,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 23,
              "decorators": [],
              "name": "f1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 70,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 70,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 36,
                    "end": 64,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 43,
                      "end": 64,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 52,
                        "end": 64,
                        "body": []
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 43,
                        "end": 46,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 44,
                            "end": 45,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 44,
                              "end": 45,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
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
