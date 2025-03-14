raiseErrorOnParameterProperty.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 45,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 45,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 43,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 24,
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
              "start": 24,
              "end": 43,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 43,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 25,
                  "end": 36,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 36,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 36,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 35,
                        "end": 36,
                        "typeName": {
                          "type": "Identifier",
                          "start": 35,
                          "end": 36,
                          "decorators": [],
                          "name": "X",
                          "optional": false
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
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 52,
            "decorators": [],
            "name": "c1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 55,
            "end": 64,
            "arguments": [
              {
                "type": "Literal",
                "start": 62,
                "end": 63,
                "raw": "0",
                "value": 0
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 59,
              "end": 61,
              "decorators": [],
              "name": "C1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
