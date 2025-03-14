__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 153,
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
      "type": "ExportDefaultDeclaration",
      "start": 99,
      "end": 153,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 114,
        "end": 153,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 120,
          "end": 153,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 126,
              "end": 151,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 126,
                "end": 132,
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
                "start": 132,
                "end": 151,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 149,
                  "end": 151,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 138,
                    "end": 147,
                    "decorators": [
                      {
                        "type": "Decorator",
                        "start": 133,
                        "end": 137,
                        "expression": {
                          "type": "Identifier",
                          "start": 134,
                          "end": 137,
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
                      "start": 139,
                      "end": 147,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 141,
                        "end": 147
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
        "id": null,
        "implements": [],
        "superClass": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
