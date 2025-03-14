genericConstraintDeclaration.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 110,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 22,
      "end": 105,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 105,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 103,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 64,
              "decorators": [],
              "name": "empty",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 103,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 89,
                "end": 103,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 90,
                    "end": 102,
                    "argument": {
                      "type": "Literal",
                      "start": 97,
                      "end": 101,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 80,
                "end": 89,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 82,
                  "end": 89,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 86,
                    "end": 89,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 87,
                        "end": 88,
                        "typeName": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 88,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 86,
                    "decorators": [],
                    "name": "List",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 64,
                "end": 78,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 65,
                    "end": 77,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeLiteral",
                      "start": 75,
                      "end": 77,
                      "members": []
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 32,
        "decorators": [],
        "name": "List",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 32,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 45,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 43,
              "end": 45,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
