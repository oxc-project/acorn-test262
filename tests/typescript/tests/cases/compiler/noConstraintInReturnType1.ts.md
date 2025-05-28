__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 87,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 23,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 21,
              "end": 23,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 87,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 85,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 43,
              "decorators": [],
              "name": "empty",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 43,
              "end": 85,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 43,
                "end": 57,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 44,
                    "end": 56,
                    "name": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 45,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeLiteral",
                      "start": 54,
                      "end": 56,
                      "members": []
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 59,
                "end": 68,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 61,
                  "end": 68,
                  "typeName": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 65,
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 65,
                    "end": 68,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 66,
                        "end": 67,
                        "typeName": {
                          "type": "Identifier",
                          "start": 66,
                          "end": 67,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 69,
                "end": 85,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 71,
                    "end": 83,
                    "argument": {
                      "type": "Literal",
                      "start": 78,
                      "end": 82,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
