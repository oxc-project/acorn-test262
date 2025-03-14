decoratorOnClassMethodParameter1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 97,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "dec",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 35,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 35,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 35,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 35,
                "decorators": [],
                "name": "Object",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 37,
          "end": 65,
          "decorators": [],
          "name": "propertyKey",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 65,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 50,
              "end": 65,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 50,
                  "end": 56
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 59,
                  "end": 65
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 67,
          "end": 89,
          "decorators": [],
          "name": "parameterIndex",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 81,
            "end": 89,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 83,
              "end": 89
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 90,
        "end": 96,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 92,
          "end": 96
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 140,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 113,
            "end": 138,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 119,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 119,
              "end": 138,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 138,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 125,
                  "end": 134,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 120,
                      "end": 124,
                      "expression": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 124,
                        "decorators": [],
                        "name": "dec",
                        "optional": false
                      }
                    }
                  ],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 134,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 128,
                      "end": 134
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
        "start": 105,
        "end": 106,
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
