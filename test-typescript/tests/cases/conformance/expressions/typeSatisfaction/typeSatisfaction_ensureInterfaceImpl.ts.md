typeSatisfaction_ensureInterfaceImpl.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 199,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 53,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 12,
        "decorators": [],
        "name": "Movable",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 15,
        "end": 52,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 21,
            "end": 50,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "move",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 26,
                "end": 42,
                "decorators": [],
                "name": "distance",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 34,
                  "end": 42,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 36,
                    "end": 42
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 49,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 45,
                "end": 49
              }
            },
            "static": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 198,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 197,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 64,
            "decorators": [],
            "name": "car",
            "optional": false
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 67,
            "end": 197,
            "expression": {
              "type": "ObjectExpression",
              "start": 67,
              "end": 153,
              "properties": [
                {
                  "type": "Property",
                  "start": 73,
                  "end": 84,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 78,
                    "decorators": [],
                    "name": "start",
                    "optional": false
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 78,
                    "end": 84,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 81,
                      "end": 84,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "Property",
                  "start": 90,
                  "end": 135,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 94,
                    "decorators": [],
                    "name": "move",
                    "optional": false
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 94,
                    "end": 135,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 98,
                      "end": 135,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 95,
                        "end": 96,
                        "decorators": [],
                        "name": "d",
                        "optional": false
                      }
                    ]
                  }
                },
                {
                  "type": "Property",
                  "start": 141,
                  "end": 151,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 145,
                    "decorators": [],
                    "name": "stop",
                    "optional": false
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 145,
                    "end": 151,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 148,
                      "end": 151,
                      "body": []
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
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 164,
              "end": 197,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 164,
                  "end": 171,
                  "typeName": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 171,
                    "decorators": [],
                    "name": "Movable",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 174,
                  "end": 197,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 180,
                    "end": 197,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 181,
                        "end": 187
                      },
                      {
                        "type": "TSUnknownKeyword",
                        "start": 189,
                        "end": 196
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 180,
                    "decorators": [],
                    "name": "Record",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
